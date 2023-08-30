FROM node:18-alpine

WORKDIR /clinet

COPY package.json .

RUN npm install -g

COPY . .
RUN npm i
#RUN npm run build
EXPOSE 3000
# required for docker desktop port mapping

CMD ["npm", "start"]
