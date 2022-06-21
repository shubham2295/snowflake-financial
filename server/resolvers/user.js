const User = require('../models/User');
const { ApolloError } = require('apollo-server-errors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userResolver = {
  Query: {

    getUserById: async (_, { ID }) => {
      return await User.findById(ID);
    }



  },
  Mutation: {
    registerUser: async (_, { userDetail: { email, password, firstname, lastname } }) => {

      // Checking if user with the email already exists 
      const isEmailExists = await User.findOne({ email: email });

      if (isEmailExists) {
        throw new ApolloError('A user is already registered with the email: ' + email, 'USER_ALREADY_EXISTS');
      }

      // Hashing the password with bcrypt
      const encryptedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        email: email.toLowerCase(),
        password: encryptedPassword,
        firstname,
        lastname
      });

      // Generating jwt and attaching it to user model
      const token = jwt.sign({ id: newUser._id, email }, "THIS_IS_SECRET", { expiresIn: "2h" });
      newUser.token = token;

      const res = await newUser.save();

      return res;

    },
    loginUser: async (_, { userDetail: { email, password } }) => {
      console.log('Login function called on backend');
      const user = await User.findOne({ email });
      console.log(user);
      const isValidUser = await bcrypt.compare(password, user.password);

      if (user && isValidUser) {
        const token = jwt.sign({ id: user.id, email }, "THIS_IS_SECRET", /* { expiresIn: "2h" } */);
        user.token = token;

        return user;
      } else {
        throw new ApolloError('Incorrect password', 'INCORRECT_PASSWORD');
      }

    },

    deleteAllUsers: async () => {
      const deleteCount = (await User.deleteMany({})).deletedCount;;
      return deleteCount;
    }

  }
};

module.exports = userResolver;