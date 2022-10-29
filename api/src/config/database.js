const mysql = require("mysql2/promise");
const connect = async () => {
    // if(global.connection && global.connection.state !== "disconnected") {
    //     return global.connection;
    // }
    const connection = await mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "123456789",
        database: "student"
    });
    global.connection = connection;
    console.log("Conectou no Banco!");
    return connection;
}
module.exports = { connect };