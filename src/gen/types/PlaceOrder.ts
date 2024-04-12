import type { Order } from "./Order";

 /**
 * @description successful operation
*/
export type PlaceOrder200 = Order;

 /**
 * @description Invalid input
*/
export type PlaceOrder400 = any;

 /**
 * @description Validation exception
*/
export type PlaceOrder422 = any;

 export type PlaceOrderMutationRequest = Order;

 /**
 * @description successful operation
*/
export type PlaceOrderMutationResponse = Order;

 export type PlaceOrderMutation = {
    Response: PlaceOrderMutationResponse;
    Request: PlaceOrderMutationRequest;
    Errors: PlaceOrder400 | PlaceOrder422;
};