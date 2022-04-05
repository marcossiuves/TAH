import axios from "axios";

axios.post('http://localhost:3000/questoes', {
    id: 10,
    enunciado: "Quanto é 3+2?",
    alt_a: "4",
    alt_b: "5",
    alt_c: "6",
    alt_d: "7",
    alt_e: "8",
    alt_certa: "b"
})
    .then((response) => {
        console.log(response.data);
        console.log(`${response.status} POST /usuario`)
    })
    .catch((error) => {
        console.error(error)
    })