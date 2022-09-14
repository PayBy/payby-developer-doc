/* eslint-disable max-len */
import CryptoJS from "crypto-js";

const PrivateKey = `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCr0pXA8AX4O4ld
5GAePhDvSIu5gRr+ICVj1qHUgiGvWH8fp1Y8QL+Q5Mxq44L7G2Z4ygKetgbEUAb4
vmPXR31tduAxcRPV4V4SNWuwtSczUyiSoZ1LueudmNy+WcmF80JKxt6XfAI6+Pg5
VNonCTRU4rlDa1ayU/5+phIb5OMi4g7uR3Mc/YEqYhoJS3zLNxXK4qLMTl6z7xqz
6pmb9NELLbeYAk4tGmm4cqN/sdvpf94ujQUJDzm7lMPe94HFNV7iAShT+/+YccHU
MAIUM6HbPhCb+DSwutmBvgAbMgG2fi7n2riiQ8LN80SI/5N8dHoRuZiyiNhZ3LSq
dYdSlIGfAgMBAAECggEAN7/L9x3p0fD/UQeYaDebJwhSzY2mRG4Js6sgNuNCKrJ8
DLkusb4QaeLSsJvBE9iAFxD0aKqG54tPt8WOf3sipzG67E/UL8E/1IiguGUOowiI
UYs+jiN0312Jwfk/+cZD7B86ecwyrQ+6+l8dqSzDXgdyNP3O022NVWps1cAeMmK+
U4lauuReZNQqbhMuZU+wNlVR93xYRmM6jF4MFEwBcn29A3ChL0HVEvnbeKFawjyy
J88S+aIaKNlqOpc7beUEbOD78WaLVvvGSAnwQpXeLxaWniwet1oXBkxAT98LNCWR
KHMfGYF2pWLVyeD9a4pEp1onryT2kCmCkOX+QbQYgQKBgQDcGFIPd8L1PrMqfnkC
gnB/vc8rrqh8BDkAx9byQDavFpqRIPF+ycemPfnkMxORHGcNrFlIUDZKI5NDFboK
VTKSTD1R84pnanMx8K0NcJLJgxnQDG9Dj2aHIO0Ki3EgXpULZBzNRTAXd2f5SKkE
monKmGDY2dHYzwM50H625pJmJQKBgQDH2kvmMdtHCtuiRbK8o1VBam7c3F47Qu6H
iAAYyXE0qH9Q1CHl7TUMCmBNbWcpDGGTAbSqs/h7HaUyuW1boz58PLTmJLMgZWKR
YkG/hCgPLty4H8dj5L0hQP5W4mXT0jgNMaG0gXnzrthnB26Ma41CbZxfa+vm0xVa
jrymuNZzcwKBgQDIMYr6rMl1PynCnjU9lh3z41c8eWqhG0oqLpuRz9ytl5bSKS/g
TnM+ACN7cQX8OOR3qGuxfdxTxVYeb/W/jk0oixY/o5Ehjc7n/u25SssJZikldxoB
Tr9IbCeQLtOgSMezC8Wy5JrgzWiSc4fhOxvYXo/Azyez2GArxzxq6wEAzQKBgEkg
Sx1TqNR52JurvRbg/NUOyLnvuFsexoC49rAbJV0LOmqs9CpZfUuGkG5EVbbjXOCZ
gy3i5EzIMCY7SxR4yuhSni6HxzNXZZWkykH1bWMA1qpYlnCqxblhOq837+JtzSym
uHB/38uWcoBga8bdo7ZmvQz9RDgVjH6yM70dbPqZAoGBAK+wgDnftT9L8wipL7v6
xhnBIXCJQAPvHJ3+Xn5b2NOrxJ6Z2ji+yQtqLsF5VTW7K9gSOiYNKF76G4Ynsslc
CENt3BkAvFzCkphmEpPT+g0SPv/9dhZyM0bP0s/QEJ73E6CYKD8FsqfVVUqtctxo
jvrFOQhJ0CRQsD8MBlR/rk1p
-----END PRIVATE KEY-----`;



export async function encrypt(data) {
  let RSA
  if (typeof window === "undefined") {
    const JSEncrypt = require("jsencrypt").default;
    RSA = new JSEncrypt();
    RSA.setPrivateKey(PrivateKey);
  } else {
    let jsEncryptModule = await import("jsencrypt");
    RSA = new jsEncryptModule.JSEncrypt();
    RSA.setPrivateKey(PrivateKey); 
    
  }
  return RSA.sign(JSON.stringify(data), CryptoJS.SHA256, "sha256");
}

