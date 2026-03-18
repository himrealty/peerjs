const { PeerServer } = require("peer");
const http = require("http");

const server = PeerServer({ port: 9000, path: "/myapp" });

server.on("connection", (client) => {
  console.log("Client connected:", client.getId());
});

server.on("disconnect", (client) => {
  console.log("Client disconnected:", client.getId());
});

// Auto pinger every 14 minutes to prevent Render free tier sleep
setInterval(() => {
  http.get("http://localhost:9000/myapp", (res) => {
    console.log("Self ping status:", res.statusCode);
  }).on("error", (err) => {
    console.log("Ping error:", err.message);
  });
}, 14 * 60 * 1000); // 14 minutes
