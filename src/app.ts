import express, { Application } from "express";
import productRouter from "./routes/productRoutes";
import userRouter from "./routes/userRoutes";

const app: Application = express();
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

export default app;
