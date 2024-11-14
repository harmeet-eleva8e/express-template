import cors from "cors";
import "dotenv/config";
import Express from "express";

import { SERVER_PORT } from "../config/index.js";
import { server_routes } from "../routes/index.js";

// configure dotenv

const server = Express();

// Enable CORS for all routes
server.use(cors());

// middlewares
server.use(Express.json({ limit: "100mb" }));

//routes
server.use("/api", server_routes);

server.use("*", async (req, res, next) => {
    return res.status(404).json({
        status: false,
        message: "Route not found",
    });
});

server.listen(SERVER_PORT, () => {
    console.log("\tServer started on:", SERVER_PORT);
    console.log("\\ ******************************************** \\\n\n");
});

export default { server };
