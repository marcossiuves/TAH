import axios from "axios";

axios.get('http://localhost:3000/questoes')
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        console.log("Função GET/questoes executada.")
    });