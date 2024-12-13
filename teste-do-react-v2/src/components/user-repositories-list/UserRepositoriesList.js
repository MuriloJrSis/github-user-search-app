import React from "react";

// Componente que exibe a lista de repositórios.
const UserRepositories = ({ repositories }) => {
  // Caso não existam repositórios, não renderiza nada.
  if (repositories.length === 0) return null;

  return (
    <div className="repositories section">
      <h2>Repositórios</h2>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserRepositories;
