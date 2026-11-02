FROM node:22
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 3003

CMD ["npx", "tsx", "src/server.ts"]