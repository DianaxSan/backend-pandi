import express from "express";
import { login } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login", (req, res) => {
  try {
    const result = login(req.body);
    res.json(result);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

export default router;