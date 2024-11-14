FROM node:18-alpine

WORKDIR /api-gateway

COPY ./package*.json ./

RUN npm install

COPY ./ ./

RUN npm run build

CMD ["npm", "run", "start:prod"]
