import express from "express";
import productRouter from "./routes/productRoutes";
import userRouter from "./routes/userRoutes";
import { config } from "./config";

const app = express();
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

app.listen(config.appPort, () => {
  console.log(`Server is running on http://localhost:${config.appPort}`);
});
