import express from "express";
import { crearProducto, obtenerProductos } from "../controllers/producto.controller.js";

const router = express.Router();

router.get("/", obtenerProductos);
router.post("/", crearProducto);

export default router;