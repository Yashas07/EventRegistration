FROM node
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
ENV MONGODB_URI=''
ENV PORT=3000
RUN npm install
COPY . .
CMD [ "npm","start" ]

