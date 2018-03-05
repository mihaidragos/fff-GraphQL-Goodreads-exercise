const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();

const schema = require('./schema')// is what contains the types and information for how to get data

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))


app.listen(4000);
console.log('Listening...');