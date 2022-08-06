const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { ApolloError } = require('apollo-server-errors');

const getUser = (authHeader) => {

  const token = authHeader.split(' ')[1];
  let userId;

  jwt.verify(token, "THIS_IS_SECRET", async (err, decoded) => {
    if (err) {
      throw new ApolloError('Invalid Authorization Token', 'INVALID_TOKEN');
    }
    userId = decoded.id;
  });

  return userId;
};

module.exports = getUser;

