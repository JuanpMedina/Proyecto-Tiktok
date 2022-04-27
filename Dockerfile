FROM node:16-alpine
RUN mkdir /app-tiktok
COPY package.json /app-tiktok
WORKDIR /app-tiktok
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm" , "start"]