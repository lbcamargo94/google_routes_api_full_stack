import { z } from "zod";

class CreateTripsSchema {
  public CreateTrips() {
    return z.object({
      destination: z.string({
        required_error:
          "Os dados fornecidos no corpo da requisição são inválidos",
        invalid_type_error: "O destino informado não tem o tipo string.",
      }),

      distance: z.string({
        required_error: "A distancia é obrigatória.",
        invalid_type_error: "A distancia informada não tem o tipo correto.",
      }),

      driver_id: z.number({
        required_error: "O id de motorista é obrigatório.",
        invalid_type_error: "O id de motorista não tem o tipo correto.",
      }),

      duration: z.string({
        required_error: "A duração do percurso é obrigatória.",
        invalid_type_error: "A duração do percurso não tem o tipo correto.",
      }),

      origin: z.string({
        required_error: "A origem do percurso é obrigatória.",
        invalid_type_error: "A origem do percurso não tem o tipo correto.",
      }),

      price: z.number({
        required_error: "O valor do serviço é obrigatório.",
        invalid_type_error: "O valor serviço não tem o tipo correto.",
      }),

      customer_id: z.string({
        required_error: "O id de cliente é obrigatório.",
        invalid_type_error: "O id de cliente não tem o tipo correto.",
      }),
    });
  }
}

export { CreateTripsSchema };
