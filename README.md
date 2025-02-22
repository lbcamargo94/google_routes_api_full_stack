# 🚀 Google Routes API (API de Rotas do Google) 🚧

_**Será desenvolvido uma aplicação conceito onde o usuário poderá solicitar uma viagem em carro particular de um ponto A até um ponto B. Ele poderá escolher entre algumas opções de motoristas e valores e confirmar a viagem. Depois também poderá listar o histórico das viagens realizadas.**_
---

**##⚡️DEFINIÇÕES DO BACKEND⚡️**

>### 📝 Configurações Iniciais

- [x] ⭐ Configurar uma API REST.
- [x] ⭐ Instalar e configurar Node.js.
- [x] ⭐ Intalar e configurar Typescript.
- [x] ⭐ Instalar e configurar PrismaORM.
- [x] ⭐ Instalar e configurar configuração com banco de dados Postgress.

---

> ### 📝 Pré desenvovlimento

- [x] ⭐ Configurar estrutura do servidor.
- [x] ⭐ Configurar strutura de tratamento de erros.
- [x] ⭐ Configurar segurança básica do servidor.
- [x] ⭐ Configurar de linter e arquivos "ignore".
- [x] ⭐ Instalar pacotes básicos de desenvolvimento(cors, ts-node, types, ...).
- [x] ⭐ Instalar e configurar gerenciador de rotas Express ou Fastfy.
- [x] ⭐ Inicializar o servidor e testar conexões.

---

>### 📝 Desenvolvimento

**POST /ride/estimate**
**Responsável por receber a origem e o destino da viagem e realizar os cálculos dos valores da viagem.**
**🚨 Esse endpoint deve fazer as seguintes validações:**

- [x] ⭐ Os endereços de origem e destino recebidos não podem estar em branco.
- [x] ⭐ O id do usuário não pode estar em branco.
- [x] ⭐ Os endereços de origem e destino não podem ser o mesmo endereço.

**🚨 Após as validações, ele deve:**

- [x] ⭐ Calcular a rota entre a origem e destino usando a API Routes do Google Maps.
- [x] ⭐ Com base no retorno, deve listar os motoristas disponíveis para a viagem de acordo com a quilometragem mínima que aceitam, cada um com seu respectivo valor, usando como base na tabela.

**🚨 O endpoint deverá retornar:**

- [x] ⭐ A latitude e longitude dos pontos iniciais e finais.
- [x] ⭐ A distância e tempo do percurso.
- [x] ⭐ A lista de motoristas disponíveis ordenados do mais barato para mais caro, cada um contendo:

    ```
    - O ID e nome do motorista.
    - A descrição.
    - O carro.
    - A avaliação.
    - O valor total da corrida.
    - A resposta original da rota no Google.
    ```

#### **_[Documentação técnica do Google Maps](https://developers.google.com/maps/documentation/routes/overview?hl=pt-br)_**

---
>**PATCH /ride/confirm**
**Responsável por confirmar a viagem e gravá-la no histórico.**
**🚨 Esse endpoint deve fazer as seguintes validações:**

- [x] ⭐ Os endereços de origem e destino recebidos não podem estar em branco.
- [x] ⭐ O id do usuário não pode estar em branco.
- [x] ⭐ Os endereços de origem e destino não podem ser o mesmo endereço.
- [x] ⭐ Uma opção de motorista foi informada e é uma opção válida.
- [x] ⭐ A quilometragem informada realmente é válida para o motorista selecionado.

**🚨 Após as validações ele deve:**

- [x] ⭐ Salvar no banco de dados os dados da viagem realizada.

**🚨 Ele NÃO deve fazer:**

- [x] ⭐ Recalcular a rota usando a API do Google Maps.

**🚨 Ela irá retornar:**

- [x] ⭐ Resposta de OK ou ERRO dependendo do valor informado.

---

>**GET /ride/{customer_id}?driver_id={id do motorista}**
**Responsável por listar as viagens realizadas por um determinado usuário**
**🚨 Esse endpoint deve fazer as seguintes validações:**

- [x] ⭐ O id do usuário não pode estar em branco.
- [x] ⭐ Se um id de motorista for informado, ele precisa ser um id válido.

**🚨 Após as validações ele:**

- [x] ⭐ Buscar as viagens realizadas pelo usuário, ordenando da mais recente para a mais antiga.
- [x] ⭐ Pode receber um query parameter “driver_id” que, se informado, deve filtrar apenas as viagens realizadas pelo usuário com este motorista.

**🚨 Ela irá retornar:**

- [x] ⭐ Uma lista com as viagens realizadas.

---

>### 📝 Conteinerização com docker

- [x] ⭐ Criar e configurar arquivo Dockerfile.
- [x] ⭐ Criar e configurar arquivo docker-compose.yml.
- [x] ⭐ Criar uma imagem e subir um container utilizando Docker.
- [x] ⭐ O docker-compose deve ser capaz de subir a aplicação e todos os serviços necessários com o comando docker-compose up.
- [x] ⭐ O backend da aplicação deve ficar exposto na porta 8080.
- [x] ⭐ O frontend da aplicação deve ficar exposto na porta 80.

># 💚 Pontos desejáveis, mas que não são eliminatórios 💡

- 📦️ Uma arquitetura limpa (clean code).
- 📦️ Testes unitários.

>### 📝 Camada de testes automatizados
