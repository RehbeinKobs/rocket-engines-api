FROM node

RUN mkdir -p /usr/src/dist/ 
WORKDIR /usr/src/

COPY package*.json ./
RUN npm install

COPY dist ./dist/

EXPOSE 3001
CMD [ "npm", "start" ]
