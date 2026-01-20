import { PropertyInterface } from "../../property";

export interface PropertysResponse {
  enterprises: PropertyInterface[];
}

export interface PropertyResponse {
  enterprise: PropertyInterface;
}
