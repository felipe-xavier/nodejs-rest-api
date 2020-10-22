FROM node:14.14-stretch-slim

WORKDIR /usr/src/app

COPY package*.json ./
COPY .env.sample ./.env

RUN set -ex \
  yarn install

COPY . .

EXPOSE 3030

CMD ["yarn", "start"]
