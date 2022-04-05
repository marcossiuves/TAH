
import axios from 'axios';

axios.get('http://localhost:3000/usuarios')
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        console.log("Função GET/usuarios executada.")
    });

axios.get('http://localhost:3000/questoes')
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error)
    })
    .then(() => {
        console.log("Função GET/questoes executada.")
    });
