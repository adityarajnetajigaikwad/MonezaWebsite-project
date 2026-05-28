const mysql = require("mysql2/promise");

async function test() {

  try {

    const connection = await mysql.createConnection({

      host: "localhost",

      user: "root",

      password: "Adityaraj@9394",

      database: "moneza",

    });

    console.log("DATABASE CONNECTED SUCCESSFULLY");

  } catch (error) {

    console.log(error);

  }

}

test();