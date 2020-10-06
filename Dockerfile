FROM node:alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
ENV MONGODB_URI='mongodb+srv://shreyas:NRXAmiWlaDuuXqtq@cluster0-pydiw.mongodb.net/shop?retryWrites=true&w=majority'
ENV PORT=3000
CMD [ "npm","start" ]

