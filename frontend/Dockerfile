# Inicio do Dockerfile
FROM node:20.17.0-alpine
# verifica a porta e build a aplicacao conforme a branches
ARG APP_PORT = 3005
# caminho principal onde a aplicacao ficara com todos os seus arquivos
WORKDIR /frontend
# seta o time zone com a hora correta para o container
ENV TZ="America/Sao_Paulo"
# copia todos os arquivos do projeto para dentro da build (image)
COPY package*.json ./
#instalando a bibliotecas
RUN npm install
#copiando o restante dos arquivos do projeto
COPY . .
# bloco de execucao de comando necessarios para buildar o projeto nodejs
RUN npm run build
#expose na porta 80.
EXPOSE 80
