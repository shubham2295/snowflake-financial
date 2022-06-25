const { ApolloServer } = require('apollo-server');
const { mongoose } = require('mongoose');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./resolvers/resolvers');
const getUser = require('./utils/getUser');

const MONGODB = 'mongodb://localhost:27017/bank';
let i = 1;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {


    console.log(i, req.headers);
    i++;
    const token = req.headers.authorization || '';

    if (token) {
      const userId = getUser(token);
      console.log('Setting up context', userId);
      return { userId };
    }

  }
});



mongoose.connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log('Mongodb connection successful');
    return server.listen({ port: 5000 });
  })
  .then(res => console.log(`server is running at ${res.url}`));