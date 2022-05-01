import axios from "axios";

axios.post('http://localhost:3000/questoes',
    {
        id: req.body.id,
        enunciado: req.body.enunciado,
        alt_a: req.body.alt_a,
        alt_b: req.body.alt_b,
        alt_c: req.body.alt_c,
        alt_d: req.body.alt_d,
        alt_e: req.body.alt_e,
        alt_certa: req.body.alt_certa,
    })
    .then((response) => {
        console.log(response.data);
        console.log(`${response.status} POST /usuario`)
    })
    .catch((error) => {
        console.error(error)
    })