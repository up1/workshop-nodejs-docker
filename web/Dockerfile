FROM node:16-alpine3.12
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY ./src /app/src
EXPOSE 80
CMD node src/server.js