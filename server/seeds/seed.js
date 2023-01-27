const db = require("../config/connection");
const { Devs } = require("../models");

const devsData = require("./techData.json");

db.once("open", async () => {
  await Tech.deleteMany({});

  const technologies = await Devs.insertMany(devsData);

  console.log("Technologies seeded!");
  process.exit(0);
});
