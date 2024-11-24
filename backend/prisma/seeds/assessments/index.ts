const DataSeedAssessments: {
  id: string;
  comment: string;
  driver_id: string;
  customer_id: string;
  evaluation_rate: number;
}[] = [
  {
    id: "2e279748-2a34-483d-8b28-89dccebcd6e1",
    comment:
      "Motorista simpático, mas errou o caminho 3 vezes. O carro cheira a donuts.",
    driver_id: "fb647dcd-7ce3-4062-b3da-40187a6bc804",
    customer_id: "7d80d66a-0c60-4b00-bf63-db4a762808bb",
    evaluation_rate: 2,
  },
  {
    id: "5359ea3b-c950-435a-acb7-9ab3a5b66bb9",
    comment:
      "Que viagem incrível! O carro é um show à parte e o motorista, apesar de ter uma cara de poucos amigos, foi super gente boa. Recomendo!",
    driver_id: "23869572-1841-4743-a3a1-81ab3e043441",
    customer_id: "c226e807-f647-4d05-8561-e04c51c2431b",
    evaluation_rate: 4,
  },
  {
    id: "ba40d119-125d-444c-828d-4427ed644cd3",
    comment:
      "Serviço impecável! O motorista é a própria definição de classe e o carro é implesmente magnífico. Uma experiência digna de um agente secreto.",
    driver_id: "1176afa7-4e22-447e-9e4d-d692faa565ce",
    customer_id: "6cadb2d6-09ba-4b0a-a25c-1a9e7ee89bc2",
    evaluation_rate: 5,
  },
];

export { DataSeedAssessments };
