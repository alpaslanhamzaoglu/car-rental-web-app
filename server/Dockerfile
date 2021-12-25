FROM node:alpine
WORKDIR /server
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
EXPOSE 3001
CMD ["npm", "run", "devStart"]