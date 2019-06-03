FROM node:12-alpine

RUN yarn global add sails nodemon

WORKDIR /usr/src/app

COPY package.json yarn.lock /usr/src/app/

RUN yarn install &&\
  yarn cache clean

COPY . /usr/src/app
