
const MajorField = require('../database/models/MajorField')

exports.createMajorField = async (req, res) => {
    try {
        let content = req.body;
        if (req.body.evaluated === true) content.evaluated = false;
        const majorField = await MajorField.create(content);
        res.status(201).send({ msg: 'Deu certo o cadastro', content: majorField })
    } catch (e) {
        console.error(e);
        res.status(400).send({ erro: e })
    }
}

exports.retrieveMajorFields = async (req, res) => {
    try {
        const majorFields = await MajorField.findAll();
        if (majorFields) res.send(majorFields)
        else res.send({ msg: 'Não existem cursos de graduação' })
    } catch (e) {
        console.error(e)
        res.status(400).send({ erro: e })
    }
}

exports.retrieveMajorField = async (req, res) => {
    try {
        const majorField = await MajorField.findByPk(req.params.id);
        if (majorField) res.send(majorField);
        else res.status(400).send({ msg: 'Curso de graduação não existe' });
    } catch (e) {
        console.error(e)
        res.status(400).send({ erro: e })
    }
}

exports.updateMajorField = async (req, res) => {
    try {
        await MajorField.update(req.body, { where: { id_major_field: req.params.id } });
        res.status(200).send({ msg: 'Deu certo o update.' })
    } catch (e) {
        console.error(e)
        res.status(400).send({ erro: e })
    }
}

exports.deleteMajorField = async (req, res) => {
    try {
        await MajorField.destroy({ where: { id_major_field: req.params.id } });
        res.status(200).send({ msg: 'Item deletado.' })
    } catch (e) {
        console.error(e);
        res.status(400).send({ erro: e })
    }
}