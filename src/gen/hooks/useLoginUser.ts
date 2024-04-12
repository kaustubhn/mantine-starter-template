import client from "@kubb/swagger-client/client";
import { useQuery } from "@tanstack/react-query";
import type { LoginUserQueryResponse, LoginUserQueryParams, LoginUser400 } from "../types/LoginUser";
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired } from "@tanstack/react-query";

 type LoginUserClient = typeof client<LoginUserQueryResponse, LoginUser400, never>;
type LoginUser = {
    data: LoginUserQueryResponse;
    error: LoginUser400;
    request: never;
    pathParams: never;
    queryParams: LoginUserQueryParams;
    headerParams: never;
    response: LoginUserQueryResponse;
    client: {
        parameters: Partial<Parameters<LoginUserClient>[0]>;
        return: Awaited<ReturnType<LoginUserClient>>;
    };
};
export const loginUserQueryKey = (params?: LoginUser["queryParams"]) => [{ url: "/user/login" }, ...(params ? [params] : [])] as const;
export type LoginUserQueryKey = ReturnType<typeof loginUserQueryKey>;
export function loginUserQueryOptions<TData = LoginUser["response"], TQueryData = LoginUser["response"]>(params?: LoginUser["queryParams"], options: LoginUser["client"]["parameters"] = {}): WithRequired<UseBaseQueryOptions<LoginUser["response"], LoginUser["error"], TData, TQueryData>, "queryKey"> {
    const queryKey = loginUserQueryKey(params);
    return {
        queryKey,
        queryFn: async () => {
            const res = await client<LoginUser["data"], LoginUser["error"]>({
                method: "get",
                url: `/user/login`,
                params,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary Logs user into the system
 * @link /user/login
 */
export function useLoginUser<TData = LoginUser["response"], TQueryData = LoginUser["response"], TQueryKey extends QueryKey = LoginUserQueryKey>(params?: LoginUser["queryParams"], options: {
    query?: Partial<UseBaseQueryOptions<LoginUser["response"], LoginUser["error"], TData, TQueryData, TQueryKey>>;
    client?: LoginUser["client"]["parameters"];
} = {}): UseQueryResult<TData, LoginUser["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? loginUserQueryKey(params);
    const query = useQuery<LoginUser["data"], LoginUser["error"], TData, any>({
        ...loginUserQueryOptions<TData, TQueryData>(params, clientOptions),
        queryKey,
        ...queryOptions
    }) as UseQueryResult<TData, LoginUser["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}