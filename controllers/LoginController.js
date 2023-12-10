import Login from '../models/LoginModel.js'

export function addLogin(req, res, next) {
  const { email, password } = req.body;
  Login.create({
    email: email,
    password: password
  })
    .then(() => {
      res.status(201).json({
        message: "Logged in Successfully!"
      });
    })
    .catch(next); // Pass errors to the error handler
}
