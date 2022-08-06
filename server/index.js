const { ApolloServer } = require('apollo-server');
const { mongoose } = require('mongoose');
require('dotenv').config();
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./resolvers/resolvers');
const getUser = require('./utils/getUser');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cors: {
    //whitelist the client here for cors
    origin: ["http://localhost:3000", "https://studio.apollographql.com"]
  },
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    if (token) {
      const userId = getUser(token);
      return { userId };
    }
  }
});

mongoose.connect(process.env.MONGODB_URL || MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log('Mongodb connection successful');
    return server.listen({ port: process.env.PORT || 5000 });
  })
  .then(res => console.log(`server is running at ${res.url}`));