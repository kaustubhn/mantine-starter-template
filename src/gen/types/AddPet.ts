import type { Pet } from "./Pet";

 /**
 * @description Successful operation
*/
export type AddPet200 = Pet;

 /**
 * @description Invalid input
*/
export type AddPet400 = any;

 /**
 * @description Validation exception
*/
export type AddPet422 = any;

 /**
 * @description Create a new pet in the store
*/
export type AddPetMutationRequest = Pet;

 /**
 * @description Successful operation
*/
export type AddPetMutationResponse = Pet;

 export type AddPetMutation = {
    Response: AddPetMutationResponse;
    Request: AddPetMutationRequest;
    Errors: AddPet400 | AddPet422;
};