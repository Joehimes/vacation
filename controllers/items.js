const Item = require("../models/Item");

module.exports = {
  getItems: async (req, res) => {
    try {
      const allItems = await Item.find();
      res.render("items.ejs", { items: allItems });
    } catch (err) {
      console.log(err);
    }
  },
  createItem: async (req, res) => {
    try {
      await Item.create({ item: req.body.item, person: req.body.person });
      console.log("Item has been added!");
      res.redirect("/items");
    } catch (err) {
      console.log(err);
    }
  },
};
