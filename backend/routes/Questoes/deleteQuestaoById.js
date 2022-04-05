import axios from "axios";
const id = 10;
axios({
    method: 'delete',
    url: `http://localhost:3000/questoes/${id}`,
})
    .then((response) => console.log('deu certo. ' + response.status))
    .catch((error) => console.error(error))
