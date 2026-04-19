import * as productoModel from "../models/producto.model.js";

export const getAll = async () => {
  return await productoModel.getAll();
};

export const create = async (data) => {
  return await productoModel.create(data);
};

export const update = async (id, data) => {
  return await productoModel.update(id, data);
};

export const remove = async (id) => {
  return await productoModel.remove(id);
};