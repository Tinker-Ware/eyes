FROM node:4.8.1-alpine
WORKDIR /app
ADD . /app

RUN yarn
RUN npm run production
