import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.status(400).json({ message: "Failed to get token" });
    }
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.status(400).json({ message: "Not valid admin" });
    }
    next();
  } catch (error) {
    res.status(400).json({ message: "errror" });
  }
};

export default adminAuth;
