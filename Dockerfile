FROM node:15-slim

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

CMD ["node", "index.js"]
