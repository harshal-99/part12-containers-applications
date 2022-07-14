FROM node:16 as built-stage

WORKDIR /usr/src/app

COPY . .

ENV REACT_APP_BACKEND_URL http://localhost:3000

RUN npm i

RUN npm run build

FROM nginx:1.20-alpine

COPY --from=built-stage /usr/src/app/build /usr/share/nginx/html
