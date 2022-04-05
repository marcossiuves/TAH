import axios from "axios";
const id = 2;
axios({
    method: 'patch',
    url: `http://localhost:3000/questoes/${id}`,
    data: {
        enunciado: "Será?"
    }
})
    .then((response) => console.log('deu certo. ' + response.status))
    .catch((error) => console.error(error))