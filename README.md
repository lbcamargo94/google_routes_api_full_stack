# 🚀 Teste Técnico Fullstack 🚧
_**Será desenvolvido uma aplicação conceito onde o usuário poderá solicitar uma viagem em carro particular de um ponto A até um ponto B. Ele poderá escolher entre algumas opções de motoristas e valores e confirmar a viagem. Depois também poderá listar o histórico das viagens realizadas.**_
---
**##⚡️DEFINIÇÕES DO BACKEND⚡️**
>### 📝 Configurações Iniciais:
  - [ ] ⭐ Configurar uma API REST.
  - [ ] ⭐ Instalar e configurar Node.js.
  - [ ] ⭐ Intalar e configurar Typescript.
  - [ ] ⭐ Instalar e configurar PrismaORM.
  - [ ] ⭐ Instalar e configurar configuração com banco de dados Postgress.
---
> ### 📝 Pré desenvovlimento:
  - [ ] ⭐ Configurar estrutura do servidor.
  - [ ] ⭐ Configurar strutura de tratamento de erros.
  - [ ] ⭐ Configurar segurança básica do servidor.
  - [ ] ⭐ Configurar de linter e arquivos "ignore".
  - [ ] ⭐ Instalar pacotes básicos de desenvolvimento(cors, ts-node, types, ...).
  - [ ] ⭐ Instalar e configurar gerenciador de rotas Express ou Fastfy.
  - [ ] ⭐ Inicializar o servidor e testar conexões.
---
>### 📝 Desenvolvimento:
**POST /ride/estimate**
**Responsável por receber a origem e o destino da viagem e realizar os cálculos dos valores da viagem.**
**🚨 Esse endpoint deve fazer as seguintes validações:**
  - [ ] ⭐ Os endereços de origem e destino recebidos não podem estar em branco.
  - [ ] ⭐ O id do usuário não pode estar em branco.
  - [ ] ⭐ Os endereços de origem e destino não podem ser o mesmo endereço.

**🚨 Após as validações, ele deve:**
  - [ ] ⭐ Calcular a rota entre a origem e destino usando a API Routes do Google Maps.
  - [ ] ⭐ Com base no retorno, deve listar os motoristas disponíveis para a viagem de acordo com a quilometragem mínima que aceitam, cada um com seu respectivo valor, usando como base na tabela.

**🚨 O endpoint deverá retornar:**
  - [ ] ⭐ A latitude e longitude dos pontos iniciais e finais.
  - [ ] ⭐ A distância e tempo do percurso.
  - [ ] ⭐ A lista de motoristas disponíveis ordenados do mais barato para mais caro, cada um contendo:
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
  - [ ] ⭐ Os endereços de origem e destino recebidos não podem estar em branco.
  - [ ] ⭐ O id do usuário não pode estar em branco.
  - [ ] ⭐ Os endereços de origem e destino não podem ser o mesmo endereço.
  - [ ] ⭐ Uma opção de motorista foi informada e é uma opção válida.
  - [ ] ⭐ A quilometragem informada realmente é válida para o motorista selecionado.

**🚨 Após as validações ele deve:**
  - [ ] ⭐ Salvar no banco de dados os dados da viagem realizada.

**🚨 Ele NÃO deve fazer:**
  - [ ] ⭐ Recalcular a rota usando a API do Google Maps.

**🚨 Ela irá retornar:**
  - [ ] ⭐ Resposta de OK ou ERRO dependendo do valor informado.
---

>**GET /ride/{customer_id}?driver_id={id do motorista}**
**Responsável por listar as viagens realizadas por um determinado usuário**
**🚨 Esse endpoint deve fazer as seguintes validações:**
  - [ ] ⭐ O id do usuário não pode estar em branco.
  - [ ] ⭐ Se um id de motorista for informado, ele precisa ser um id válido.

**🚨 Após as validações ele:**
  - [ ] ⭐ Buscar as viagens realizadas pelo usuário, ordenando da mais recente para a mais antiga.
  - [ ] ⭐ Pode receber um query parameter “driver_id” que, se informado, deve filtrar apenas as viagens realizadas pelo usuário com este motorista.

**🚨 Ela irá retornar:**
  - [ ] ⭐ Uma lista com as viagens realizadas.
---
>### 📝 Conteinerização com docker:
  - [ ] ⭐ Criar e configurar arquivo Dockerfile.
  - [ ] ⭐ Criar e configurar arquivo docker-compose.yml.
  - [ ] ⭐ Criar uma imagem e subir um container utilizando Docker.
  - [ ] ⭐ O docker-compose deve ser capaz de subir a aplicação e todos os serviços necessários com o comando docker-compose up.
  - [ ] ⭐ O backend da aplicação deve ficar exposto na porta 8080.
  - [ ] ⭐ O frontend da aplicação deve ficar exposto na porta 80.


># 💚 Pontos desejáveis, mas que não são eliminatórios 💡
  - 📦️ Uma arquitetura limpa (clean code).
  - 📦️ Testes unitários.

>### 📝 Camada de testes automatizados:
