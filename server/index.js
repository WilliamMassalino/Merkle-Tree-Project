const express = require('express');
const verifyProof = require('../utils/verifyProof');

const port = 1225;

const app = express();
app.use(express.json());

// Hardcode a merkle root aqui representando toda a nice list
const MERKLE_ROOT = 'ddd59a2ffccddd60ff47993312821cd57cf30f7f14fb82937ebe2c4dc78375aa';

app.post('/gift', (req, res) => {
  // Pegar os parâmetros do front-end aqui
  const { name, proof } = req.body;

  console.log(`Received name: ${name}`);
  console.log(`Received proof: ${JSON.stringify(proof)}`);

  // Provar que um nome está na lista
  const isInTheList = verifyProof(proof, name, MERKLE_ROOT);
  console.log(`Is in the list: ${isInTheList}`);

  if (isInTheList) {
    res.send("You got a toy robot!");
  } else {
    res.send("You are not on the list :(");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
