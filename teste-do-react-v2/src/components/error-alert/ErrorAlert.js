import React from "react";

// Componente funcional que exibe uma mensagem de erro.
// Recebe a mensagem como uma prop chamada "message".
const ErrorAlert = ({ message }) => (
    // Renderiza a mensagem dentro de uma tag <h3>.
    <h3>{message}</h3>
);

export default ErrorAlert;
