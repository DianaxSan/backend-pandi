import express from "express";
import cors from "cors";
import productoRoutes from "./routes/producto.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/productos", productoRoutes);
app.use("/auth", authRoutes);

export default app;