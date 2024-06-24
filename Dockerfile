FROM node:14.19.3 as build
ARG BUILD_CONTEXT

WORKDIR /fe
COPY package.json .
COPY yarn.lock .
COPY ./apps/$BUILD_CONTEXT/package.json apps/$BUILD_CONTEXT/
COPY ./apps/lib/package.json apps/lib/
RUN yarn --pure-lockfile --non-interactive --production
COPY ./apps/$BUILD_CONTEXT apps/$BUILD_CONTEXT
COPY ./apps/lib apps/lib

 CMD yarn start:$BUILD_CONTEXT
