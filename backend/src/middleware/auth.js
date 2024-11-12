import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  //first we get user token from headers
  const { token } = req.headers;
  if (!token) {
    return res.status(400).json({ message: "Not Authorized, Login Again", success: false });
  }
  //if we get token we go to try catch

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id;
    // (req.body.userId);

    next();
  } catch (error) {
    res.status(400).json({ message: "An error occured", message: false });
  }
};
export default authUser;
