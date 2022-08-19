const User = require("../Models/user.model");
const userRouter = require("express").Router();

userRouter.get("/all", (req, res) => {
  User.find({})
    .then((user) => res.status(200).json({ status: 200, users: user }))
    .catch((err) => res.status(400).json({ status: 400, error: err }));
});

// ToDo :
//  - Add validation

userRouter.post("/add", (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;
  const description = req.body.description;

  // noinspection JSValidateTypes
  const newUser = new User({
    name,
    password,
    email,
    description,
  });

  newUser
    .save()
    .then(() => res.status(200).json({ status: 200, message: "User Added" }))
    .catch((error) => res.status(400).json({ status: 400, error: error }));
});

module.exports = userRouter;
