const User = require("../database/models/User");
const UserType = require('../database/models/UserType')

exports.createUser = async (req, res) => {
  try {
    let content = req.body;
    const user = await User.create(content);
    res.status(201).send({ msg: "Deu certo o cadastro", content: user });
  } catch (e) {
    console.error(e);
    res.status(400).send({ erro: e });
  }
};

exports.retrieveUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    if (users) res.send(users);
    else res.send({ msg: "Não existem usuários" });
  } catch (e) {
    console.error(e);
    res.status(400).send({ erro: e });
  }
};

exports.retrieveUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) res.send(user);
    else res.status(400).send({ msg: "Usuário não existe" });
  } catch (e) {
    console.error(e);
    res.status(400).send({ erro: e });
  }
};

exports.updateUser = async (req, res) => {
  try {
    await User.update(req.body, { where: { id_user: req.params.id } });
    res.status(200).send({ msg: "Deu certo o update." });
  } catch (e) {
    console.error(e);
    res.status(400).send({ erro: e });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.destroy({ where: { id_user: req.params.id } });
    res.status(200).send({ msg: "Item deletado." });
  } catch (e) {
    console.error(e);
    res.status(400).send({ erro: e });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        registration: req.body.registration,
        password: req.body.password,
      },
    });
    const userType = await UserType.findOne({where: {id_user_type: user.dataValues.id_user_type}})

    if (user) res.send({ user, userType });
    else res.status(400).send({ msg: "Usuário não existe" });
  } catch (e) {
    console.error(e);
    res.status(400).send({ erro: e });
  }
};
