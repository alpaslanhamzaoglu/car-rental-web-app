FROM node:alpine
WORKDIR /my-app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
CMD ["npm", "start"]