# Merkle Tree Project

## Overview

This project demonstrates the implementation and application of a Merkle Tree to verify membership in a list, specifically a "Nice List" for holiday gift distribution. The project includes a client-server architecture where the client proves to the server that a given name is in the Merkle Tree, and the server verifies this proof to grant a gift.

## Features

Merkle Tree Implementation: Utilizes cryptographic hash functions to construct and manage a Merkle Tree.
Proof Generation: Generates cryptographic proofs that a specific element is part of the Merkle Tree.
Verification Process: Verifies the validity of proofs using a Merkle Root.
Client-Server Architecture: The client sends a proof to the server, and the server validates this proof.

# Components

## 1. Client

**index.js:** The client script that generates the proof for a given name and sends it to the server for verification.

## 2. Server

**index.js:** An Express server that verifies the proof sent by the client and responds with whether the name is on the "Nice List".

## 3. Utils

* MerkleTree.js: Implementation of the Merkle Tree, including methods for generating the root and proofs.
* verifyProof.js: Function to verify that a given proof is valid for a specific Merkle Root.
* niceList.json: A JSON file containing the list of names that should be included in the Merkle Tree.

# How to Run

## Install Dependencies

Clone the repository and navigate to the project directory. Run the following command to install the necessary dependencies:

```bash
npm install
```

## Start the Server

Navigate to the server directory and start the server:

```bash
node server/index.js
```

The server will start on port 1225.

## Run the Client

In another terminal, navigate to the client directory and run the client script:

```bash
node client/index.js
```

The client will send a proof to the server, and the server will respond with whether the name is on the "Nice List".

# Example

* niceList.json: A list of names that are considered to be on the "Nice List".
* MerkleTree.js: Constructs the Merkle Tree and generates proofs for names in the list.
* verifyProof.js: Verifies the proofs against the Merkle Root.
* Client-Server Interaction: The client generates a proof for a specific name and sends it to the server. The server verifies the proof and responds accordingly.

# Technologies Used

* Node.js
* Express
* axios
* ethereum-cryptography

# Summary

This project provides a practical implementation of Merkle Trees in a client-server architecture, demonstrating the process of generating and verifying cryptographic proofs for membership in a list. It serves as a foundational example for understanding the applications of Merkle Trees in distributed systems and blockchain technology.
