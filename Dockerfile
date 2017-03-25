FROM node:4.8.1-alpine
WORKDIR /app
ADD . /app

ENV API_HOST="https://api.tinkerware.io"

EXPOSE 3000
RUN yarn
RUN npm run build

RUN rm -rf node_modules

RUN yarn --production

CMD npm run production
