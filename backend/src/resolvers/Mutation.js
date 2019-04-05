const Mutations = {
  createDog(parent, args, ctx, info) {
    global.dogs = global.dogs || [];
    const newDog = args;
    global.dogs.push(newDog);
    return newDog;
  }
};

module.exports = Mutations;
