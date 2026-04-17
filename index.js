require('dotenv').config();

const express = require('express');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const app = express();
const db = require('./db');
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('API funcionando 🚀');
});

app.get('/saludo', (req, res) => {
  res.json({ mensaje: 'Hola Diana, ya estás haciendo backend 🔥' });
});

app.post('/usuario', (req, res) => {
  const { nombre, edad } = req.body;

  if (!nombre || edad == null) {
    return res.status(400).json({
      error: 'Faltan datos'
    });
  }

  res.json({
    mensaje: `Usuario ${nombre} registrado`
  });
});

app.post('/producto', (req, res) => {
  const { nombre, precio, descripcion } = req.body;

  if (!nombre || precio == null || !descripcion) {
    return res.status(400).json({
      error: 'Faltan datos'
    });
  }

  const sql = 'INSERT INTO productos (nombre, precio, descripcion) VALUES (?, ?, ?)';

  db.query(sql, [nombre, precio, descripcion], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        error: 'Error al guardar en BD'
      });
    }

    res.json({
      mensaje: 'Producto guardado',
      id: result.insertId
    });
  });
});

app.get('/productos', (req, res) => {
  const sql = 'SELECT * FROM productos';

  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        error: 'Error al obtener productos'
      });
    }

      res.json({
          productos: result
      });
  });
});

app.get('/productos/:id', (req, res) => {
  const id = req.params.id;

  const sql = 'SELECT * FROM productos WHERE id = ?';

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        error: 'Error al obtener producto'
      });
    }

    if (result.length === 0) {
      return res.status(404).json({
        error: 'Producto no encontrado'
      });
    }

    res.json(result[0]);
  });
});


app.put('/productos/:id', (req, res) => {
  const id = req.params.id;
  const { nombre, precio, descripcion } = req.body;

  if (!nombre || precio == null || !descripcion) {
    return res.status(400).json({
      error: 'Faltan datos'
    });
  }

  const sql = `
    UPDATE productos 
    SET nombre = ?, precio = ?, descripcion = ?
    WHERE id = ?
  `;

  db.query(sql, [nombre, precio, descripcion, id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        error: 'Error al actualizar producto'
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        error: 'Producto no encontrado'
      });
    }

    res.json({
      mensaje: 'Producto actualizado'
    });
  });
});

app.delete('/productos/:id', (req, res) => {
  const id = req.params.id;

  const sql = 'DELETE FROM productos WHERE id = ?';

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        error: 'Error al eliminar producto'
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        error: 'Producto no encontrado'
      });
    }

    res.json({
      mensaje: 'Producto eliminado'
    });
  });
});


//SIEMPRE AL FINAL
app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});