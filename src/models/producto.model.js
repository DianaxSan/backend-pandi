import db from "../config/db.js";

// OBTENER TODOS
export const getAll = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM productos", (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

// CREAR
export const create = ({ nombre, precio, descripcion, imagen }) => {
  return new Promise((resolve, reject) => {
    const sql = `
      INSERT INTO productos (nombre, precio, descripcion, imagen)
      VALUES (?, ?, ?, ?)
    `;

    db.query(sql, [nombre, precio, descripcion, imagen], (err, result) => {
      if (err) reject(err);
      else resolve({ id: result.insertId });
    });
  });
};

// ACTUALIZAR
export const update = (id, { nombre, precio, descripcion, imagen }) => {
  return new Promise((resolve, reject) => {
    const sql = `
      UPDATE productos 
      SET nombre=?, precio=?, descripcion=?, imagen=? 
      WHERE id=?
    `;

    db.query(sql, [nombre, precio, descripcion, imagen, id], (err) => {
      if (err) reject(err);
      else resolve({ id, nombre, precio, descripcion, imagen });
    });
  });
};

// ELIMINAR
export const remove = (id) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM productos WHERE id=?", [id], (err) => {
      if (err) reject(err);
      else resolve({ message: "Producto eliminado" });
    });
  });
};