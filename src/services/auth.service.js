import jwt from "jsonwebtoken";

const ADMIN_USER = process.env.ADMIN_USER;
const ADMIN_PASS = process.env.ADMIN_PASS;

export const login = ({ username, password }) => {

  console.log("ENV USER:", process.env.ADMIN_USER);
  console.log("ENV PASS:", process.env.ADMIN_PASS);

  if (username !== process.env.ADMIN_USER || password !== process.env.ADMIN_PASS) {
    throw new Error("Credenciales incorrectas");
  }

  const token = jwt.sign(
    { username },
    process.env.JWT_SECRET,
    { expiresIn: "2h" }
  );

  return { token };
};