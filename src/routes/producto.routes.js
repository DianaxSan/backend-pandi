import express from "express";
import { crearProducto, obtenerProductos } from "../controllers/producto.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", obtenerProductos);
router.post("/", crearProducto);
router.post("/", verifyToken, crearProducto);
//router.put("/:id", verifyToken, actualizarProducto);
//router.delete("/:id", verifyToken, eliminarProducto);

export default router;