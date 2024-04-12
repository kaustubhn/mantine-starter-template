import client from "@kubb/swagger-client/client";
import { useMutation } from "@tanstack/react-query";
import type { PlaceOrderMutationRequest, PlaceOrderMutationResponse, PlaceOrder400, PlaceOrder422 } from "../types/PlaceOrder";
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query";

 type PlaceOrderClient = typeof client<PlaceOrderMutationResponse, PlaceOrder400 | PlaceOrder422, PlaceOrderMutationRequest>;
type PlaceOrder = {
    data: PlaceOrderMutationResponse;
    error: PlaceOrder400 | PlaceOrder422;
    request: PlaceOrderMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PlaceOrderMutationResponse;
    client: {
        parameters: Partial<Parameters<PlaceOrderClient>[0]>;
        return: Awaited<ReturnType<PlaceOrderClient>>;
    };
};
/**
 * @description Place a new order in the store
 * @summary Place an order for a pet
 * @link /store/order
 */
export function usePlaceOrder(options: {
    mutation?: UseMutationOptions<PlaceOrder["response"], PlaceOrder["error"], PlaceOrder["request"]>;
    client?: PlaceOrder["client"]["parameters"];
} = {}): UseMutationResult<PlaceOrder["response"], PlaceOrder["error"], PlaceOrder["request"]> {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation<PlaceOrder["response"], PlaceOrder["error"], PlaceOrder["request"]>({
        mutationFn: async (data) => {
            const res = await client<PlaceOrder["data"], PlaceOrder["error"], PlaceOrder["request"]>({
                method: "post",
                url: `/store/order`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}