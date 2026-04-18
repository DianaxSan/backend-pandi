import * as productoModel from "../models/producto.model.js";

export const getAll = async () => {
  return await productoModel.getAll();
};

export const create = async (data) => {
  return await productoModel.create(data);
};