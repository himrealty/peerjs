FROM node:18-alpine
WORKDIR /app
RUN npm install peer
COPY server.js .
EXPOSE 10000
CMD ["node", "server.js"]
