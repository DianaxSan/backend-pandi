import jwt from "jsonwebtoken";

const ADMIN_USER = process.env.ADMIN_USER;
const ADMIN_PASS = process.env.ADMIN_PASS;

export const login = ({ username, password }) => {
  return new Promise((resolve, reject) => {
    if (username !== ADMIN_USER || password !== ADMIN_PASS) {
      return reject("Credenciales incorrectas");
    }

    const token = jwt.sign(
      { username },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    resolve({ token });
  });
};