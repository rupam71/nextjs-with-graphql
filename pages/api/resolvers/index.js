import axios from "axios";
import userList from "./../../../userList2.json"

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
    getUserByName: async (_, args) => {
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
    },
    getUserByID: async (parant, args) => {
      try {
        console.log('args',args)
        console.log('args type',args.id)
        userList.forEach((ele)=> {
          console.log('typeof ele.id',typeof ele.id)
          console.log('typeof args.id',typeof args.id)
          if(ele.id===args.id) console.log('=== same')
          if(ele.id==args.id) console.log('== same')
        })
        const user = userList.filter(ele=>ele.id.toString()===args.id)
        console.log('user',user[0])
        return user[0]
      } catch (error) {
        throw error;
      }
    }
  },
  Mutation: {
    createUser(parants,args) {
      const id = userList.length
      const newUser = args
      newUser.id = id
      userList.push(newUser)
      return newUser;
    },
    createNewUser: (parant, args) => {
      const user = args.input;
      console.log(user)
      const id = userList.length
      user.id = id
      userList.push(user);
      return user
    },
    updateUserName: (parant, args) => {
      const id = args.input.id;
      const newUserName = args.input.newUserName
      let userUpdate
    //  const {id,newUserName} = args.input
      userList.forEach(user=>{
        if(user.id.toString() === id) {
          user.name = newUserName
          userUpdate = user
        }
      })
      return userUpdate
    },
    deleteUser: (parents,args) => {
      const user = userList.filter(user=>user.id.toString() !== args.id)
      return user
    }
  }
};

export default resolvers;