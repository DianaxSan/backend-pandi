import express from "express";
import { 
  crearProducto, 
  actualizarProducto, 
  eliminarProducto 
} from "../controllers/producto.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Público
router.get("/", obtenerProductos);

// Protegido
router.post("/", verifyToken, crearProducto);

// (luego)
// router.put("/:id", verifyToken, actualizarProducto);
// router.delete("/:id", verifyToken, eliminarProducto);

export default router;