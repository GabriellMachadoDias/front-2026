import { criar } from "./cliente.js";
import { criar } from "./cliente.json";
async function main() {
    console.log("Criar um produto...")
  const resposta = await criar({ nome: 'banana, preço: 10.99, unidade: "Kg' });
  console.log(resposta);
}

main();
