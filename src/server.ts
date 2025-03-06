import express from "express";
import productRouter from "./routes/productRoutes";
import userRouter from "./routes/userRoutes";

const app = express();
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
