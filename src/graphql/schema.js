export default `
  scalar Date
  
  type Status {
    message: String!
  }
  
  type Auth {
    token: String!
  }
  
  type User{
    _id: ID!
    username: String
    email: String!
    firstName: String
    lastName: String
    avatar: String
    createdAt: Date!
    updatedAt: Date!
  }
  
  type Me {
     _id: ID!
    username: String
    email: String!
    firstName: String
    lastName: String
    avatar: String
    createdAt: Date!
    updatedAt: Date!
  }
  
  type Tweet {
    _id: ID!
    text: String!
    createdAt: Date!
    updatedAt: Date!
  }
  
  type Query {
    getTweet(_id: ID!): Tweet
    getTweets: [Tweet],
    me: Me
  }
  
  type Mutation {
    createTweet(text: String!): Tweet
    updateTweet(_id: ID!, text: String): Tweet
    deleteTweet(_id: ID!): Status
    signUp(email: String!, fullName: String!, password: String!, avatar: String, username: String): Auth
    signIn(email: String!, password: String!): Auth
  }
  
  schema {
    query: Query
    mutation: Mutation
  }
`;
