const { PeerServer } = require("peer");
const http = require("http");

const server = PeerServer({ 
    port: 10000, 
    path: "/",
    proxied: true
});

server.on("connection", (client) => {
    console.log("Client connected:", client.getId());
});

server.on("disconnect", (client) => {
    console.log("Client disconnected:", client.getId());
});

setInterval(() => {
    http.get("http://localhost:10000/", (res) => {
        console.log("Self ping:", res.statusCode);
    }).on("error", (err) => {
        console.log("Ping error:", err.message);
    });
}, 14 * 60 * 1000);
