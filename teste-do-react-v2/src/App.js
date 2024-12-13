import React, { useState } from "react";

// Funções
import { getUser } from "./services/user"; // Buscar dados do usuário
import { getRepositories } from "./services/repositories"; // Repositórios da API do GitHub.

// Componentes.
import UserSearch from "./components/user-search/UserSearch"; // Formulário de busca.
import UserProfile from "./components/user-profile/UserProfile"; // Exibição de informações do usuário.
import UserRepositories from "./components/user-repositories-list/UserRepositoriesList"; // Exibição da lista de repositórios.
import ErrorAlert from "./components/error-alert/ErrorAlert"; // Mensagem de erro.

// Estilos.
import "./css/reset.css"
import "./css/styles.css";

const App = () => {
  // Estados para armazenar valor do input, informações do usuário e mensagens de erro.
  const [userName, setUserName] = useState(""); // Nome do usuário a ser buscado.
  const [userData, setUserData] = useState(null); // Dados do usuário retornados pela API.
  const [error, setError] = useState(false); // Indica se ocorreu um erro na busca.

  // Poderíamos usar useEffect para carregar um usuário padrão ao montar o componente.
  // Mantemos o código simples e controlado apenas pelas interações do usuário.

  // Função que realiza a busca de dados ao clicar no botão ou pressionar Enter.
  const handleSearch = async () => {
    // Verifica se o campo de busca está vazio e exibe um alerta caso esteja.
    if (!userName) {
      alert("Preencha o campo com o nome do usuário do GitHub");
      return;
    }

    try {
      // Busca os dados do usuário utilizando a API do GitHub.
      const userResponse = await getUser(userName);

      // Verifica se o usuário não foi encontrado.
      if (userResponse.message === "Not Found") {
        setError(true); // Exibe mensagem de erro.
        setUserData(null); // Reseta os dados do usuário.
        return;
      }

      // Caso o usuário seja encontrado, busca seus repositórios.
      const repositoriesResponse = await getRepositories(userName);

      // Atualiza o estado com os dados do usuário e seus repositórios.
      setError(false); // Reseta o erro.
      setUserData({ ...userResponse, repositories: repositoriesResponse });
    } catch (err) {
      // Captura e exibe erros que possam ocorrer na comunicação com a API.
      console.error("Erro ao buscar dados:", err);
    }
  };

  // Renderiza a interface do usuário.
  return (
    <main>
      <i className="devicon-github-original"></i>

      {/* Seção central contendo o formulário de busca e os dados do usuário */}
      <section className="container">
        {/* Componente para busca de usuários */}
        <UserSearch
          platform="GitHub"
          value={userName}
          onChange={(e) => setUserName(e.target.value)} // Atualiza o estado quando o usuário digita.
          onSearch={handleSearch} // Função chamada ao clicar em "Buscar".
        />

        {/* Exibição dos dados ou mensagens de erro */}
        <div className="profile-data">
          {error && <ErrorAlert message="Usuário não encontrado" />} {/* Exibe erro caso o usuário não exista */}
          {userData && (
            <>
              {/* Exibe informações do perfil do usuário */}
              <UserProfile
                avatarUrl={userData.avatar_url}
                name={userData.name}
                bio={userData.bio}
              />
              {/* Exibe lista de repositórios */}
              <UserRepositories repositories={userData.repositories} />
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default App;
