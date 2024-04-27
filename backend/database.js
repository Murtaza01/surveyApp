import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const db = mysql
  .createPool({
    host: process.env.DB_host,
    user: process.env.DB_user,
    password: process.env.DB_password,
    database: process.env.DB_database,
  })
  .promise();

export async function showTable() {
  const [result] = await db.query("SELECT * FROM results");
  return result;
}

export async function insertRow({ name, age, gender, score }) {
  await db.query(
    `
  INSERT INTO results(name,age,gender,score)
  VALUES (?,?,?,?)
  `,
    [name, age, gender, score]
  );
}
