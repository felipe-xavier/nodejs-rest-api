FROM node:14.14-stretch-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN set -ex \
  yarn install && \
  yarn test

COPY . .

EXPOSE 3030

CMD ["yarn", "start"]
