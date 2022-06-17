const { ApolloServer } = require('apollo-server');
const { mongoose } = require('mongoose');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./resolvers/resolvers');

const MONGODB = 'mongodb://localhost:27017/bank';


const server = new ApolloServer({
  typeDefs,
  resolvers
});

mongoose.connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log('Mongodb connection successful');
    return server.listen({ port: 5000 });
  })
  .then(res => console.log(`server is running at ${res.url}`));