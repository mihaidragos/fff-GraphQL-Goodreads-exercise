const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();

// is what contains the types and information for how to get data

const schema = require('./schema')

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))


app.listen(4000);
console.log('Listening...');