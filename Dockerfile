FROM node:alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
ENV MONGODBURI='mongodb+srv://shreyas:NRXAmiWlaDuuXqtq@cluster0-pydiw.mongodb.net/shop?retryWrites=true&w=majority'
CMD [ "npm","start" ]

