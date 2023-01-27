const { Schema, model } = require("mongoose");

const teamsSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Teams = model("Teams", teamsSchema);

module.exports = Teams;
