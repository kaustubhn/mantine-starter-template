import client from "@kubb/swagger-client/client";
import { useMutation } from "@tanstack/react-query";
import type { UpdatePetWithFormMutationResponse, UpdatePetWithFormPathParams, UpdatePetWithFormQueryParams, UpdatePetWithForm400 } from "../types/UpdatePetWithForm";
import type { UseMutationOptions, UseMutationResult } from "@tanstack/react-query";

 type UpdatePetWithFormClient = typeof client<UpdatePetWithFormMutationResponse, UpdatePetWithForm400, never>;
type UpdatePetWithForm = {
    data: UpdatePetWithFormMutationResponse;
    error: UpdatePetWithForm400;
    request: never;
    pathParams: UpdatePetWithFormPathParams;
    queryParams: UpdatePetWithFormQueryParams;
    headerParams: never;
    response: UpdatePetWithFormMutationResponse;
    client: {
        parameters: Partial<Parameters<UpdatePetWithFormClient>[0]>;
        return: Awaited<ReturnType<UpdatePetWithFormClient>>;
    };
};
/**
 * @summary Updates a pet in the store with form data
 * @link /pet/:petId
 */
export function useUpdatePetWithForm(petId: UpdatePetWithFormPathParams["petId"], params?: UpdatePetWithForm["queryParams"], options: {
    mutation?: UseMutationOptions<UpdatePetWithForm["response"], UpdatePetWithForm["error"], UpdatePetWithForm["request"]>;
    client?: UpdatePetWithForm["client"]["parameters"];
} = {}): UseMutationResult<UpdatePetWithForm["response"], UpdatePetWithForm["error"], UpdatePetWithForm["request"]> {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation<UpdatePetWithForm["response"], UpdatePetWithForm["error"], never>({
        mutationFn: async () => {
            const res = await client<UpdatePetWithForm["data"], UpdatePetWithForm["error"], UpdatePetWithForm["request"]>({
                method: "post",
                url: `/pet/${petId}`,
                params,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}