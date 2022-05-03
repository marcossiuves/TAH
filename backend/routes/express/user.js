const express = require('express');
const User = require('../../database/User.js')
const router = express.Router();

//TODO terminar tipos de métodos do CRUD 
//TODO migrar a execução dos métodos para camada de Controller
router.get('/', async (req, res) => {
    //   controllers.execute(req, res, await unidadeController.list);
    try {
        const usuarios = await User.findAll();
        res.send(usuarios)
    } catch (e) {
        console.error(e)
    }
});
router.get('/:id', async (req, res) => {
    try {
        const usuario = await User.findByPk(req.params.id);
        res.send(usuario)
    } catch (e) {
        console.error(e)
    }
});
router.delete('/deletar/:id', async (req,res) =>{
    try{
        await User.destroy({where: {id_user: req.params.id}});
    } catch(e){
        console.error(e);
    }
})
router.post('/cadastrar', async (req,res) =>{
    try{
        
        const user = await User.create({
            id_user: req.body.id_user,
            registration: req.body.registration,
            password: req.body.password,
            email: req.body.email
        });
        res.send(user)
    } catch(e){
        console.error(e);
    }
})
router.put('/editar/:id',async(req,res) =>{
    try{      
        // isso vai dar errado porque tem que ver como exatamente 
        // precisa ser a sintaxe de 
        await User.update({req.body} ,{where:{id_user: req.params.id}})
    }catch(e){
        console.error(e)
    }
})


module.exports = router;


// import axios from "axios";

// axios.get('http://localhost:3001/questoes').then((response) => {
//     console.log(response.data);
//     console.log(`${response.status} Get /usuario`)
// }).catch((error) => {
//     console.error(error)
// })

// axios.post('http://localhost:3000/questoes',
//     {
//         id: req.body.id,
//         enunciado: req.body.enunciado,
//         alt_a: req.body.alt_a,
//         alt_b: req.body.alt_b,
//         alt_c: req.body.alt_c,
//         alt_d: req.body.alt_d,
//         alt_e: req.body.alt_e,
//         alt_certa: req.body.alt_certa,
//     }
// ).then((response) => {
//     console.log(response.data);
//     console.log(`${response.status} POST /usuario`)
// }).catch((error) => {
//     console.error(error)
// })
