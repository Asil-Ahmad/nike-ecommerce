import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

const listUser = async (req, res) => {
  try {
    const allUser = await userModel.find({});
    res.status(200).json({ message: "success", allUser: allUser });
  } catch (error) {}
};

const addUser = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    // console.log(email, name, password);
    // //!here we send data to mongodb
    const userData = { email, name, password };
    const isEmailExist = await userModel.findOne({ email: email });
    // console.log(isEmailExist);

    if (isEmailExist) {
      res.status(400).json({ message: "Failed to add user" });
      // console.log("email already exist");
    } else {
      // console.log("User added");
      const user = userModel(userData);
      await user.save();
      res.status(200).json({ message: "User Added Succesfully" });
    }
  } catch (error) {
    console.log(error);
  }
};

//!Using Promise
const loginUser = (req, res) => {
  // try {
  //   const id = req.body.id;
  //   const name = req.body.name;
  //   console.log("");
  //   const userData = { name };
  //   // console.log(userData);

  //   // const userID = await userModel.find(userData);
  //   // console.log(userID[0].name);

  //   res.status(200).json({ message: "User Already Exist" });
  // } catch (error) {
  //   console.log(error);

  //   res.status(400).json({ message: "Not exist" });
  // }
  const { email, password } = req.body;

  // console.log(name);
  const userData = { email, password };
  userModel
    .find(userData)
    .then((data) => {
      // console.log(data);
      const user = data[0]._id; //!here we get _id of the user

      if (data[0].email === email && data[0].password === password) {
        //!-------------here we get token for specific user to login session---------------
        const token = jwt.sign({ userId: user }, `${process.env.JWT_SECRET}`);
        res
          .status(200)
          .json({ message: "Success", user: data[0], token: token });
      }
    })
    .catch((err) => res.status(400).json({ message: "Failed" }));
};

const deleteUser = async (req, res) => {
  const userID = req.body.id;
  console.log(userID);

  try {
    await userModel.findByIdAndDelete(userID);
    res.status(200).json({ message: "User Deleted" });
  } catch (error) {
    res.status(400).json({ message: "Cannot find user" });
  }
  //   }
};

export { addUser, loginUser, listUser, deleteUser };
