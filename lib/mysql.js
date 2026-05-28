import mysql from "mysql2/promise";

const db = mysql.createPool({

  host: "localhost",

  user: "root",

  password: "Adityaraj@9394",

  database: "moneza",

});

export default db;