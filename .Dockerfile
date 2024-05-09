#React app image
FROM node:lts-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY ./ /app/

RUN npm run build


#nginx 
FROM nginx:latest as prod

COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80/tcp

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]