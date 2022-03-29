import { gql } from '@apollo/client';

const  typeDefs  =  gql`
    type  User {
        id: ID
        login: String
        avatar_url: String
    }

    type  Query {
        getUsers: [User]
        getUser(name: String!): User!
    }`

export default typeDefs