const MerkleTree = require('./MerkleTree');
const niceList = require('./niceList');
const verifyProof = require('./verifyProof');

// criar o Merkle Tree para a lista completa
const merkleTree = new MerkleTree(niceList);

// obter a raiz
const root = merkleTree.getRoot();
console.log(`Merkle Root: ${root}`);

// encontrar a prova de que Norman Block está na lista
const name = 'Norman Block';
const index = niceList.findIndex(n => n === name);
const proof = merkleTree.getProof(index);

// verificar a prova contra a Merkle Root
console.log(verifyProof(proof, name, root)); // true, Norman Block está na lista!

// Exibir a Merkle Root
console.log(`Merkle Root: ${root}`);