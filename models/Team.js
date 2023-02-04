const { Schema, model } = require("mongoose");


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

  teamMembers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

const Team = model("Team", teamSchema);

module.exports = Team;
