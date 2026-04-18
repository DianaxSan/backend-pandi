import db from "../config/db.js";

export const getAll = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM productos", (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

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