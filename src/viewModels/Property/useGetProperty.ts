import { useQuery } from "@apollo/client/react";
import { PropertyResponse } from "../../shared/interfaces/http/property/property.response";
import { GET_PROPERTY_ID } from "../../shared/queries/propertys/get-property-id";

export const useGetProperty = (id: string) => {
  const { data, loading, error } = useQuery<PropertyResponse>(GET_PROPERTY_ID, {
    variables: { id },
  });

  return {
    data,
    loading,
    error,
  };
};
