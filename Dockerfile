FROM node:18

WORKDIR /app

COPY package*.json ./

RUN yarn install --ignore-engines

COPY . .

EXPOSE 5736

CMD yarn start