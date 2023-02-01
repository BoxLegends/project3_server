const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
  id: {
    type: String,
    required: true,
    unique: true,
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

  email: {
    type: String,
    require: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
  },

  password: {
    type: String,
    require: true,
  }
});

const Devs = model("Devs", userSchema);

module.exports = user;
