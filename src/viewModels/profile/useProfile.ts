import { useMutation, useQuery } from "@apollo/client/react";
import { PropertysResponse } from "../../shared/interfaces/http/property/property.response";
import { DELETE_PROPERTY } from "../../shared/queries/propertys/delete-property";
import { GET_PROPERTYS } from "../../shared/queries/propertys/get-propertys";

export const useProfile = () => {
  const { data, loading, error } = useQuery<PropertysResponse>(GET_PROPERTYS);
  const [deleteProperty, { loading: deleteLoading }] = useMutation(
    DELETE_PROPERTY,
    {
      refetchQueries: ["Enterprises"],
    },
  );

  const onDelete = async (id: string) => {
    try {
      await deleteProperty({
        variables: {
          id: id,
        },
      });
    } catch (err) {
      console.log("Erro ao criar:", err);
    }
  };

  return {
    data,
    loading,
    error,
    onDelete,
    deleteLoading,
  };
};
