const { Schema, model } = require("mongoose");

const userSchema = require("./User");

const teamSchema = new Schema({
  id: {
    type: String,
    require: true,
    unique: true,
  },

  name: {
    type: String,
    required: true,
    unique: true,
  },

  description: {
    type: String,
    required: false,
  },

  //teamMembers: [userSchema],
});

const Team = model("Team", teamSchema);

module.exports = Team;
