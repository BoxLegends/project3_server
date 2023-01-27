const { Schema, model } = require("mongoose");

const devsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Devs = model("Devs", devsSchema);

module.exports = Devs;
