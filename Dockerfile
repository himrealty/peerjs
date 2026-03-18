FROM node:18-alpine
WORKDIR /app
RUN npm install peer
EXPOSE 9000
CMD ["node", "node_modules/.bin/peerjs", "--port", "9000", "--path", "/"]
