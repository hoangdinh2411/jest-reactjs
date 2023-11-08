FROM node:18-alpine

WORKDIR /jest-reactjs

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]

EXPOSE 5173