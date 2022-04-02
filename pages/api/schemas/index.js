import { gql } from '@apollo/client';

const  typeDefs  =  gql`
    type  User {
        id: ID!
        name: String!
        age: Int!
        married: Boolean!
        login: String
        avatar_url: String
    }

    # Queries
    type  Query {
        getUsers: [User]
        getUser(name: String!): User!
    }
    
    # Mutation
    type Mutation{
        createUser(name: String!, age: Int, married: Boolean) : User!
       # createNewUser(User) : User!
       # createNewUserMust(User!) : User!
    }
    `

export default typeDefs