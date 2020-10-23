FROM node:14.14-stretch-slim

WORKDIR /usr/src/app

COPY package*.json ./
COPY .env.sample ./.env

COPY . .

RUN yarn install
RUN yarn test

EXPOSE 3030

CMD ["yarn", "start"]
