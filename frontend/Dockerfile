FROM node:16-alpine3.12 as step1
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.21.3-alpine
COPY --from=step1 /app/dist/ /usr/share/nginx/html