const { Schema, model } = require("mongoose");

const memberSchema = require('./Devs');

const teamsSchema = new Schema({
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

  teamMembers: [memberSchema],

});

const Teams = model("Teams", teamsSchema);

module.exports = Teams;
