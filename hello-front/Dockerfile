FROM node:16 as built-stage

WORKDIR /usr/src/app

COPY . .

RUN npm i

RUN npm run build

FROM nginx:1.20-alpine

COPY --from=built-stage /usr/src/app/build /usr/share/nginx/html
