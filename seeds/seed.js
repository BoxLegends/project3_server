const db = require('../config/connection');
const { teams } = require('../models/Team');
const teamSeeds = require('./teamSeeds.json');
const { user } = require('../models/User');
const userSeeds = require('./UserSeeds.json')

db.once('open', async () => {
  await teams.deleteMany({});
  await teams.create(teamSeeds);

  await user.deleteMany({});
  await user.create(userSeeds);

  console.log('all done!');
  process.exit(0);
});