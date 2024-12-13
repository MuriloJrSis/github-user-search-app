// Importa a URL base e o limite de repositórios.
import { baseUrl, respositoriesQuantity } from "../variables/variables";

// Função que busca os repositórios do usuário.
export async function getRepositories(userName) {
  // Faz uma requisição à API para listar os repositórios do usuário.
  const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${respositoriesQuantity}`);
  return response.json(); // Retorna os dados no formato JSON.
}


/* import { baseUrl, respositoriesQuantity } from "./variables";

export async function getRepositories(userName) {
  const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${respositoriesQuantity}`);
  return response.json();
}
 */

