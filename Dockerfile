FROM node:18-alpine

WORKDIR /jest-reactjs

COPY . .

RUN npm install

CMD ["npm", "run", "dev"]

EXPOSE 3000