import React from "react";

// Componente que exibe as informações do perfil do usuário.
const UserProfile = ({ avatarUrl, name, bio }) => (
  <div className="info">
    <img src={avatarUrl} alt="Foto de perfil do usuário" />
    <div className="data">
      <h1>{name || "Não possui nome cadastrado"}</h1>
      <p>{bio || "Não possui bio cadastrada"}</p>
    </div>
  </div>
);

export default UserProfile;
