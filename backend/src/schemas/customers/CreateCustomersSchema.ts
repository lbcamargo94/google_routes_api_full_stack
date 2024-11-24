import { REGEX_EMAIL_VALIDATION } from "@utils/Contants";
import { z } from "zod";

class CreateCustomersSchema {
  public CreateCustomers() {
    return z.object({
      customer_id: z.number({
        required_error: "O id do cliente é obrigatório.",
        invalid_type_error: "O id de cliente não tem o tipo correto.",
      }),

      email: z
        .string({
          required_error: "O email do cliente é obrigatório.",
          invalid_type_error: "O email do cliente não tem o tipo correto.",
        })
        .email({
          message: "O email informado não é válido.",
        })
        .regex(REGEX_EMAIL_VALIDATION, {
          message: "O email informado não é válido.",
        }),

      name: z
        .string({
          required_error: "O nome do cliente é obrigatório.",
          invalid_type_error: "O nome do cliente não tem o tipo correto.",
        })
        .min(3, {
          message: "O nome do cliente deve ter no mínimo 3 caracteres.",
        })
        .max(150, {
          message: "O nome do cliente deve ter no máximo 150 caracteres.",
        }),
    });
  }
}

export { CreateCustomersSchema };
