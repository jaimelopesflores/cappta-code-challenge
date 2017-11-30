FROM node:8-alpine
COPY . /var/code-challenge
WORKDIR /var/code-challenge
RUN npm install