FROM node:slim

#ENV NPM_CONFIG_LOGLEVEL=warn

WORKDIR /usr/src/app

COPY build ./build
COPY server ./server
COPY package*.json ./

RUN npm install \
  express@^4.16.3 \
  ignore-styles@^5.0.1 \
  babel-register@6.26.0

CMD npm run serv