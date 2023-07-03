// server.js
const { ApolloServer } = require('apollo-server');
const { readFileSync } = require('fs')

var typeDefs = readFileSync('./schema/typeDefs.graphql', 'UTF-8')
const resolvers = require('./resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
