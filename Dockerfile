FROM node:12.22.12
RUN mkdir /app-tiktok
COPY package.json /app-tiktok
WORKDIR /app-tiktok
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm" , "start"]