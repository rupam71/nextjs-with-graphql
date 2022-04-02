import axios from "axios";
import userList from "./../../../userList.json"

const resolvers = {
  Query: {
    getUsers: async () => {
      try {
        // const users = await axios.get("https://api.github.com/users");
        // return users.data.map((user) => ({
        //   user
        // }));
        return userList;
      } catch (error) {
        throw error;
      }
    },
    getUser: async (_, args) => {
      try {
        // const user = await axios.get(
        //   `https://api.github.com/users/${args.name}`
        // );
        // return {
        //   id: user.data.id,
        //   login: user.data.login,
        //   avatar_url: user.data.avatar_url
        // };
        const user = userList.filter((ele)=> ele.name===args.name)
        console.log('user',user[0])
        return user[0]
      } catch (error) {
        throw error;
      }
    }
  },
  Mutation: {
    createUser(parants,args) {
      const newUser = args
      userList.push(newUser)
      return newUser;
    }
  }
};

export default resolvers;