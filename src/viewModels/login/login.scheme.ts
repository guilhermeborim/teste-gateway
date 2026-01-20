import { z } from "zod";

export const loginScheme = z.object({
  email: z.email({ error: "Formato de E-mail inválido" }),
  password: z
    .string({ error: "Senha é obrigatória" })
    .min(1, { error: "Senha é obrigatória" }),
});

export type LoginFormData = z.infer<typeof loginScheme>;
