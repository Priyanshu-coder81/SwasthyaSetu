import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json({ limit: "10kb" }));

app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use(cookieParser());

export {app};