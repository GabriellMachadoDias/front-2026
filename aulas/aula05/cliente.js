const url = "http://localhost:5173/produtos";

// POST /
async function criar(produto) {
  try {
    // gera uam requisição HTTP no JS
    const resposta = await fetch(url, {
      method: "POST",
      body: JSON.stringify(produto), // converte Js p/ JSON
      headers: { "content-type": "application/json" },
    });
    return await resposta.json();
  } catch (error) {
    return { message: `Deu ruim! ${error.code}-${error.message}` };
  }
}
// GET /id
function obter(produto) {}
// GET /
function listar(produto) {}
// PUT /id
function atualizar(produto) {}
// DELETE /id
function remover(produto) {}

export { criar, obter, listar, atualizar, remover };
