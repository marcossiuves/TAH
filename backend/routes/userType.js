const express = require('express');
const UserType = require('../database/models/UserType.js')
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const userTypes = await UserType.findAll();
        if (userTypes) res.send(userTypes)
        else res.send({ msg: 'Não existem usuários' })
    } catch (e) {
        console.error(e)
        res.status(400).send({ erro: e })
    }
});
router.get('/:id', async (req, res) => {
    try {
        const userType = await UserType.findByPk(req.params.id);
        if (userType) res.send(userType);
        else res.status(400).send({ msg: 'Usuário não existe' });
    } catch (e) {
        console.error(e)
        res.status(400).send({ erro: e })
    }
});
router.delete('/deletar/:id', async (req, res) => {
    try {
        await UserType.destroy({ where: { id_user_type: req.params.id } });
        res.status(200).send({ msg: 'Item deletado.' })
    } catch (e) {
        console.error(e);
        res.status(400).send({ erro: e })
    }
})
router.post('/cadastrar', async (req, res) => {
    try {
        const userType = await UserType.create(req.body);
        res.status(201).send({ msg: 'Deu certo o cadastro', conteudo: userType })
    } catch (e) {
        console.error(e);
        res.status(400).send({ erro: e })
    }
})
router.patch('/editar/:id', async (req, res) => {
    try {
        await UserType.update(req.body, { where: { id_user_type: req.params.id } });
        res.status(200).send({ msg: 'Deu certo o update.' })
    } catch (e) {
        console.error(e)
        res.status(400).send({ erro: e })
    }
})

module.exports = router;
