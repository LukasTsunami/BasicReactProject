# base image
FROM node:13.1.0-alpine

WORKDIR /app

COPY . /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json package.json
RUN npm install
RUN npm install react-scripts@3.2.0 -g

# start app
CMD ["npm", "start"]