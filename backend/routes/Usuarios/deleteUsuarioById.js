import axios from "axios";

axios({
    method: 'delete',
    url: `http://localhost:3000/usuarios/:id`,
})
    .then((response) => console.log('deu certo. ' + response.status))
    .catch((error) => console.error(error))
