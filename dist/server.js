"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categories_routes_1 = require("./routes/categories.routes");
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use("/categories", categories_routes_1.categoriesRoutes);
server.get("/", (req, res) => {
    console.log("hello world");
});
server.listen(3000, () => console.log("server is running..."));
