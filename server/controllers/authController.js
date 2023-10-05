import User from '../../database/model/user.model.js';
import jwt from 'jsonwebtoken';
import validator from 'email-validator';

// Controller function for user sign-in
const signin = async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    // Check if the user exists
    if (!user) {
      return res.status(400).send('Email does not exist');
    }

    // Compare the provided password with the user's stored hashed password
    user.comparePassword(password, (err, match) => {
      if (!match || err) return res.status(400).send('Password does not match');

      // Generate a JWT token for authentication
      let token = jwt.sign({ _id: user._id }, 'kljclsadflkdsjfklsdjfklsdjf', {
        expiresIn: '24h',
      });

      // Send a successful response with user information and token
      res.status(200).send({
        token,
        username: user.username,
        email: user.email,
        id: user._id,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      });
    });
  } catch (error) {
    return res.status(400).send('Login failed');
  }
};

// Controller function for user registration
const register = async (req, res) => {
  const { username, password, email } = req.body;
  try {
    // Validate user input
    if (!username) return res.status(400).send('Username is required');
    if (!email) return res.status(400).send('Email is required');

    // Validate the email format
    if (!validator.validate(email)) {
      return res.status(400).send('Enter a valid email address');
    }

    // Validate password length
    if (!password || password.length < 6) {
      return res
        .status(400)
        .send('Enter a valid password (at least 6 characters)');
    }

    // Check if the email is already registered
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).send('Email is already taken');
    }

    // Create a new user
    const user = await new User({
      email,
      username,
      password,
    });

    // Save the user to the database
    await user.save();

    // Send a successful response with the newly created user
    return res.status(200).send(user);
  } catch (error) {
    return res.status(400).send('Error creating user', error);
  }
};

export default {
  signin,
  register,
};
