const { forwardTo } = require("prisma-binding");

const Query = {
  // async items(parent, args, ctx, info) {
  //   const items = await ctx.db.query.items();
  //   return items;
  // }
  items: forwardTo('db'),
  item: forwardTo('db')
};

module.exports = Query;
