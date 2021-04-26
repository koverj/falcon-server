FROM node:14.14.0-alpine3.12

COPY . ./app

WORKDIR /app

RUN ["chmod", "+x", "/usr/local/bin/docker-entrypoint.sh"]
RUN npm install && npm run build

EXPOSE 8086

CMD ["npm", "run", "start"]