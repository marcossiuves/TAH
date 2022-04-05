import axios from "axios";

axios.post('http://localhost:3000/usuarios', {
    idUsuario: 0,
    nome: "",
    email: "@",
    senha: "",
    tipoUsuario: 1,
})
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error)
    })
    .then(() => {
        console.log("Função POST/usuario executada.")
    });