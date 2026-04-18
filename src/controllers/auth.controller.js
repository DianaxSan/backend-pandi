import * as authService from "../services/auth.service.js";

export const login = async (req, res) => {
  try {
    const result = await authService.login(req.body);
    res.json(result);
  } catch (error) {
    res.status(401).json({ error });
  }
};