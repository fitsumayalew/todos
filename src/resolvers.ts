const resolvers = {
  Query: {
    me() {
      return {
        id: "1",
        name: "Fitsum Ayalew",
        email: "fitsumayalew047@gmail.com",
        password: "rfrwewr",
        todos: []
      };
    }
  }
};

export default resolvers;
