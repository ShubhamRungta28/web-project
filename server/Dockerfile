FROM node:18.2.0-alpine
# --> alpine uses most affordable sizes of images

WORKDIR /app 
# creates a working directory to save all commands

COPY package*.json ./

COPY client/package*.json client/
RUN npm run install-client --omit=dev

COPY server/package*.json server/
RUN npm run install-server --omit=dev

COPY client/ client/
RUN npm run build --prefix client

COPY server/ server/

USER node

CMD ["npm","start","--prefix","server"]
# What to do when docker container starts up

EXPOSE 8000