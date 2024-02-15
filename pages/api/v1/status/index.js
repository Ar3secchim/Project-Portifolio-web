import database from "/infra/database.js";

async function status(req, res) {
  res.status(200).json({res: "Hellou word"});
}

export default status;