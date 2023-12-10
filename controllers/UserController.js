import User from "../models/UserModel.js";

export const signupUser = async(req, res) =>{
    try{
        await User.create({
            name: req.body.username,
            email:req.body.email,
            password: req.body.password,
        });
        res.status(201).json({msg: "User created!"})
    } catch (error) {
        res.send(error);
    }

};


export const loginUser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    let user = await User.findOne({ where: { email: email } });

    if (password === user.password) {
      res.json(user);
    } else {
      res.json("Can't find email or password");
    }
  } catch (error) {
    res.send(error);
  }
};