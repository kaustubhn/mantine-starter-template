import client from "@kubb/swagger-client/client";
import { useQuery } from "@tanstack/react-query";
import type { LogoutUserQueryResponse } from "../types/LogoutUser";
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired } from "@tanstack/react-query";

 type LogoutUserClient = typeof client<LogoutUserQueryResponse, never, never>;
type LogoutUser = {
    data: LogoutUserQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: LogoutUserQueryResponse;
    client: {
        parameters: Partial<Parameters<LogoutUserClient>[0]>;
        return: Awaited<ReturnType<LogoutUserClient>>;
    };
};
export const logoutUserQueryKey = () => [{ url: "/user/logout" }] as const;
export type LogoutUserQueryKey = ReturnType<typeof logoutUserQueryKey>;
export function logoutUserQueryOptions<TData = LogoutUser["response"], TQueryData = LogoutUser["response"]>(options: LogoutUser["client"]["parameters"] = {}): WithRequired<UseBaseQueryOptions<LogoutUser["response"], LogoutUser["error"], TData, TQueryData>, "queryKey"> {
    const queryKey = logoutUserQueryKey();
    return {
        queryKey,
        queryFn: async () => {
            const res = await client<LogoutUser["data"], LogoutUser["error"]>({
                method: "get",
                url: `/user/logout`,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @summary Logs out current logged in user session
 * @link /user/logout
 */
export function useLogoutUser<TData = LogoutUser["response"], TQueryData = LogoutUser["response"], TQueryKey extends QueryKey = LogoutUserQueryKey>(options: {
    query?: Partial<UseBaseQueryOptions<LogoutUser["response"], LogoutUser["error"], TData, TQueryData, TQueryKey>>;
    client?: LogoutUser["client"]["parameters"];
} = {}): UseQueryResult<TData, LogoutUser["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? logoutUserQueryKey();
    const query = useQuery<LogoutUser["data"], LogoutUser["error"], TData, any>({
        ...logoutUserQueryOptions<TData, TQueryData>(clientOptions),
        queryKey,
        ...queryOptions
    }) as UseQueryResult<TData, LogoutUser["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}