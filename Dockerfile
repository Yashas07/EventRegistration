FROM node
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
ENV MONGODB_URI='mongodb+srv://shreyas:NRXAmiWlaDuuXqtq@cluster0-pydiw.mongodb.net/shop?retryWrites=true&w=majority'
ENV PORT=3000
RUN npm install
COPY . .
CMD [ "npm","start" ]

