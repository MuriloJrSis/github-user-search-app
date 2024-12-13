import React from "react";

// Componente de busca.
const UserSearch = ({ platform, value, onChange, onSearch }) => {
  //Lida com pressionamento de tecla Enter para iniciar a busca.
  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <header>
      <h2>Buscar Usuário - {platform}</h2>
      <input
        type="text"
        id="input-search"
        placeholder="Digite o nome do usuário no GitHub"
        value={value}
        onChange={onChange}
        onKeyUp={handleKeyUp}
      />
      <input type="button" value="Buscar" id="btn-search" onClick={onSearch} />
    </header>
  );
};

export default UserSearch;
