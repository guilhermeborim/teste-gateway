import { useMutation } from "@apollo/client/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useForm } from "react-hook-form";
import { CREATE_PROPERTY } from "../../shared/queries/propertys/create-property";
import { PropertyFormData, propertyScheme } from "./property.scheme";

export const useProperty = () => {
  const {
    control,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<PropertyFormData>({
    resolver: zodResolver(propertyScheme),
    defaultValues: {
      name: "",
      listingType: "SALE",
      price: "",
      gallery: ["https://picsum.photos/400/300?default=true"],
    },
  });

  const [createProperty, { data, loading, error }] = useMutation(
    CREATE_PROPERTY,
    {
      refetchQueries: ["Enterprises"],
    },
  );

  const onSubmit = handleSubmit(async (formData) => {
    const property = await createProperty({
      variables: {
        input: {
          name: formData.name,
          listingType: formData.listingType,
          price: Number(formData.price),
          gallery: formData.gallery,
        },
      },
    });

    if (property.data) {
      router.back();
    }
  });

  return {
    control,
    onSubmit,
    data,
    loading,
    error,
    errors,
    watch,
    setValue,
  };
};
