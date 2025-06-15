import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

// Criar o middleware auth
const auth = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Acesso negado" });
  }

  try {
    const decoded = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET);

    req.userId = decoded.id;
  } catch (err) {
    return res.status(401).json({ message: "Token inválido", error: err });
  }
  // Seguir adiante, passando pelo auth
  next();
};

export default auth;
