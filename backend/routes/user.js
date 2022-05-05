const express = require('express');
const User = require('../database/models/User.js')
const router = express.Router();

//TODO terminar tipos de métodos do CRUD 
//TODO migrar a execução dos métodos para camada de Controller
router.get('/', async (req, res) => {
    //   controllers.execute(req, res, await unidadeController.list);
    try {
        const usuarios = await User.findAll();
        if (usuarios) res.send(usuarios)
        else res.send({ msg: 'Não existem usuários' })
    } catch (e) {
        console.error(e)
        res.status(400).send({ erro: e })
    }
});
router.get('/:id', async (req, res) => {
    try {
        const usuario = await User.findByPk(req.params.id);
        if (usuario) res.send(usuario);
        else res.status(400).send({ msg: 'Usuário não existe' });
    } catch (e) {
        console.error(e)
        res.status(400).send({ erro: e })
    }
});
router.delete('/deletar/:id', async (req, res) => {
    try {
        await User.destroy({ where: { id_user: req.params.id } });
        res.status(200).send({ msg: 'Item deletado.' })
    } catch (e) {
        console.error(e);
        res.status(400).send({ erro: e })
    }
})
router.post('/cadastrar', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).send({ msg: 'Deu certo o cadastro', conteudo: user })
    } catch (e) {
        console.error(e);
        res.status(400).send({ erro: e })
    }
})
router.patch('/editar/:id', async (req, res) => {
    try {
        await User.update(req.body, { where: { id_user: req.params.id } });
        res.status(200).send({ msg: 'Deu certo o update.' })
    } catch (e) {
        console.error(e)
        res.status(400).send({ erro: e })
    }
})

module.exports = router;
