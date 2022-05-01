import axios from "axios";
axios({
    method: 'patch',
    url: `http://localhost:3000/questoes/:id`,
})
    .then((response) => console.log('deu certo. ' + response.status))
    .catch((error) => console.error(error))