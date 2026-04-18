import * as productoService from "../services/producto.service.js";

export const obtenerProductos = async (req, res) => {
  try {
    const productos = await productoService.getAll();
    res.json({ productos });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener productos" });
  }
};

export const crearProducto = async (req, res) => {
  try {
    const producto = await productoService.create(req.body);
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: "Error al crear producto" });
  }
};