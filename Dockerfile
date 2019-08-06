FROM node:12.7.0

LABEL maintainer="https://t.me/@skarppion101"

ADD ./package.json /api/

ADD ./yarn.lock /api/

WORKDIR /api

RUN yarn

ADD ./ /api

RUN mkdir -p dist

RUN yarn run build
