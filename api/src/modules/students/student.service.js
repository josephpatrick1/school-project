const db = require("../../config/database");
const select = async () => {
    const conn = await db.connect();
    const sql = "SELECT * FROM student;";
    const [result] = await conn.query(sql);
    return result;
}
const insert = async (name, age, sex) => {
    const conn = await db.connect();
    const sql = `INSERT INTO student (name, age, sex) VALUES (?, ?, ?)`;
    return (await conn.query(sql, [name, age, sex]))[2];
}
const remove = async (studentId) => {
    const conn = await db.connect();
    const sql = `DELETE FROM student WHERE id = ?;`;
    return await conn.query(sql, [studentId]);

}
const update = async (studentId, name, age, sex) => {
    const conn = await db.connect();
    const sql = `UPDATE FROM student SET name = ?, age = ?, sex = ? WHERE id = ?;`;
    return await conn.query(sql, [name, age, sex, studentId]);
}
module.exports = { select, insert, remove, update }