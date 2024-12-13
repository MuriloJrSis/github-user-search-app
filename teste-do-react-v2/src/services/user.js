// Importa a URL base da API do GitHub.
import { baseUrl } from "../variables/variables";

// Função que faz a busca dos dados do usuário.
export async function getUser(userName) {
  // Faz uma requisição à API com o nome do usuário.
  const response = await fetch(`${baseUrl}/${userName}`);
  return response.json(); // Retorna os dados no formato JSON.
}


/*
import { baseUrl } from "./variables";

export async function getUser(userName) {
  const response = await fetch(`${baseUrl}/${userName}`);
  return response.json();
}
*/ 