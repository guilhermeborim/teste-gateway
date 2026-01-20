import { z } from "zod";

export const propertyScheme = z.object({
  name: z
    .string({ error: "Nome é obrigatório" })
    .min(1, { error: "Nome é obrigatório" }),
  listingType: z.enum(["SALE", "RENT"], {
    error: "Tipo de anúncio é obrigatório",
  }),
  price: z
    .string({ error: "Preço é obrigatório" })
    .min(1, { error: "Preço é obrigatório" }),
  gallery: z
    .array(z.url({ error: "Cada imagem deve ser uma URL válida" }))
    .min(1, { error: "Pelo menos uma imagem é obrigatória" }),
});

export type PropertyFormData = z.infer<typeof propertyScheme>;
