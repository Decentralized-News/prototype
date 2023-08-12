import express from "express";
import mongoose from "mongoose";
import { Express } from "express";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI ?? "");
    } catch (e) {
        console.log(e);
    }
};

const logger = require("./middleware/logger");
import articleRoutes from "./routes/articleRoutes";

connectDB();

const app: Express = express();
const PORT = process.env.PORT || 3500;

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/article", articleRoutes);

mongoose.connection.once("open", () => {
    console.log("Connected to DecentNewsDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

mongoose.connection.on("error", (err) => {
    console.log(err);
});
