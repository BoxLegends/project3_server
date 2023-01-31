const { Schema, model } = require("mongoose");

const devsSchema = new Schema(
  {
  id: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  link: {
    type: String,
  },

  description: {
    type: String,
    required: true,
  },

  Image: {
    type: String,
    require: true,
  },
});

const Devs = model("Devs", devsSchema);

module.exports = Devs;
