const express = require("express");
const { studentRouter } = require("./modules/students/student.routes");
const app = express();
app.use(express.json());
const PORT = 80;
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.use("/students", studentRouter);
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}...`);
});