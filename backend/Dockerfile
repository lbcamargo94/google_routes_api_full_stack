FROM node:20.15.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY prisma ./prisma
COPY . .

RUN npx prisma generate

RUN npm run build

EXPOSE 8080

CMD ["sh", "-c", "npx prisma migrate deploy && npx prisma db push && npm start"]
