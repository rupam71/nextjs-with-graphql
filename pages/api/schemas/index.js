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
    input  UpdateUserNameInput {
        id: ID!
        newUserName: String!
    }
    input  CreateUser {
        name: String!
        age: Int!
        married: Boolean!
        nationality: Nationalily = brazil #de
    }
    enum Nationalily{
        canada,
        brazil,
        india,
        france,
        chile,
        bangladesh
    }

    # Queries
    type  Query {
        getUsers: [User]
        getUserByName(name: String!): User!
        getUserByID(id: ID!): User!
    }
    
    # Mutation
    type Mutation{
        createUser(name: String!, age: Int!, married: Boolean!) : User!
        createNewUser(input: CreateUser!) : User!
        updateUserName(input: UpdateUserNameInput) : User!
        deleteUser(id: ID!): User
       # createNewUserMust(User!) : User!
    }
    `

export default typeDefs