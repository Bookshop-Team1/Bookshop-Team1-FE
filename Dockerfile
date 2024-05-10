#React app image
FROM node:22-alpine as build

WORKDIR /app
CMD ["pwd"]
CMD ["ls","-a"]

COPY package*.json /app/

CMD ["ls","-a"]
CMD ["echo","Starting npm install"]
RUN npm install
CMD ["echo","Completed npm install"]
COPY ./ /app/

CMD ["ls","-a"]

RUN npm run build


#nginx 
FROM nginx:latest

COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

# CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]