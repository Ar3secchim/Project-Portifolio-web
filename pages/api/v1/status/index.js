import database from "infra/database.js";

async function status(req, res) {
  const updateAt = new Date().toISOString();
  const databaseVersion = await database.query("SHOW server_version;")
  const databaseVersionResult= databaseVersion.rows[0].server_version;

  res.status(200).json({
    update_at: updateAt,
    database: {
      dependecies: {
        version: databaseVersionResult,
      },
    },
  });
}

export default status;