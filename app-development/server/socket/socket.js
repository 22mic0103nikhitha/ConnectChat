import redisClient from "../utils/redis.js";
import { createAdapter } from "@socket.io/redis-adapter";
import { createClient } from "redis";
import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
	cors: {
		origin: ["http://localhost:3000"],
		methods: ["GET", "POST"],
	},
});


// ---------------- REDIS PUB/SUB SETUP ----------------

const pubClient = createClient({
	url: process.env.REDIS_URL,
});

const subClient = pubClient.duplicate();

async function setupRedisAdapter() {
	try {
		await pubClient.connect();
		await subClient.connect();

		io.adapter(createAdapter(pubClient, subClient));

		console.log("Redis adapter connected");
	} catch (error) {
		console.log("Redis connection error:", error);
	}
}

setupRedisAdapter();

// ----------------------------------------------------


export const getReceiverSocketId = (receiverId) => {
	return userSocketMap[receiverId];
};

const userSocketMap = {}; // {userId: socketId}


io.on("connection", (socket) => {
	console.log("a user connected", socket.id);

	const userId = socket.handshake.query.userId;

	if (userId !== "undefined") {
		userSocketMap[userId] = socket.id;
	}

	io.emit("getOnlineUsers", Object.keys(userSocketMap));



	// -------- NEW REDIS ONLINE TRACKING --------

	socket.on("user-online", async (userId) => {

		socket.userId = userId;

		await redisClient.sAdd("online_users", userId);

	});

	// -------------------------------------------



	socket.on("disconnect", async () => {
		console.log("user disconnected", socket.id);

		delete userSocketMap[userId];

		if (socket.userId) {
			await redisClient.sRem("online_users", socket.userId);
		}

		io.emit("getOnlineUsers", Object.keys(userSocketMap));
	});
});

export { app, io, server };