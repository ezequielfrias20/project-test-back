FROM node:16

WORKDIR /usr/src/app

COPY package.json ./
# COPY yarn.lock ./

RUN yarn

COPY . .

EXPOSE 3003
EXPOSE 3004

CMD [ "yarn", "start"]
