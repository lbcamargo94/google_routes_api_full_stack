const DataSeedDrivers: {
  id: string;
  description: string;
  driver_id: number;
  minimum_distance: number;
  name: string;
  rating: number;
  vehicle: string;
}[] = [
  {
    id: "fb647dcd-7ce3-4062-b3da-40187a6bc804",
    description:
      "Olá! Sou o Homer, seu motorista camarada! Relaxe e aproveite o passeio, com direito a rosquinhas e boas risadas (e talvez alguns desvios).",
    driver_id: 1,
    minimum_distance: 1,
    name: "Homer Simpson",
    rating: 2.5,
    vehicle: "Plymouth Valiant 1973 rosa e enferrujado",
  },
  {
    id: "23869572-1841-4743-a3a1-81ab3e043441",
    description:
      "Ei, aqui é o Dom. Pode entrar, vou te levar com segurança e rapidez ao seu destino. Só não mexa no rádio, a playlist é sagrada.",
    driver_id: 2,
    minimum_distance: 5,
    name: "Dominic Toretto",
    rating: 5.0,
    vehicle: "Dodge Charger R/T 1970 modificado",
  },
  {
    id: "1176afa7-4e22-447e-9e4d-d692faa565ce",
    description:
      "Boa noite, sou James Bond. À seu dispor para um passeio suave e discreto. Aperte o cinto e aproveite a viagem.",
    driver_id: 3,
    minimum_distance: 10,
    name: "James Bond",
    rating: 10,
    vehicle: "Aston Martin DB5 clássico",
  },
];

export { DataSeedDrivers };
