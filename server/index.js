const { ApolloServer } = require('apollo-server');
const { mongoose } = require('mongoose');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./resolvers/resolvers');
const getUser = require('./utils/getUser');

const MONGODB = 'mongodb://localhost:27017/bank';


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {

    const token = req.headers.authorization || '';

    if (token) {
      const userId = getUser(token);
      console.log(userId);
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