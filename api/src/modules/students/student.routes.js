const { Router } = require("express");
const { select, insert, remove, update } = require("./student.service");
const studentRouter = Router();
studentRouter.get("/", (async (req, res) => {
    const result = await select();
    res.json(result);
}));
studentRouter.post("/", async (req, res) => {
    try {
        await insert(req.body.name, req.body.age, req.body.sex);
        res.json("Inserido com sucesso!");
    } catch (err) {
        console.log(err);
        res.status(500).json("Erro ao inserir registro!");
    }
});
studentRouter.delete("/:id", async(req, res) => {
    try {
        await remove(req.params.id);
        res.json("Deletado com Sucesso!");

    } catch {
        res.status(500).json("Erro ao deletar o Registro!");
    }
})
studentRouter.patch("/:id", async (req, res) => {
    try {
        await update(req.params.id, req.body.name, req.body.age, req.body.sex);
        res.json("Atualizado com sucesso!");
    } catch (err) {
        console.log(err);
        res.status(500).json("Erro ao atualizar registro!");
    }
});
module.exports = { studentRouter };