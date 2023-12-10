import contactUs from '../models/contactUsModel.js'

export function addContact(req, res, next) {
  const { name, email, message } = req.body;
  contactUs.create({
    name: name,
    email: email,
    message: message
  })
    .then(() => {
      res.status(201).json({
        message: "Added Successfully!"
      });
    })
    .catch(next); // Pass errors to the error handler
}
