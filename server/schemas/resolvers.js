const { AuthenticationError } = require("apollo-server-express");
const { Devs } = require("../models");
const { Teams } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },

    teams: async () => {
      return Teams.find();
    },

    team: async (parent, { teamId }) => {
      return Profile.findOne({ _id: teamId });
    },


    devs: async () => {
      return Devs.find();
    },

    dev: async (parent, { devId }) => {
      return Devs.findOne({ _id: devId });
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await Devs.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await Devs.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await Devs.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
