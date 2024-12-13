# GitHub User Search App

Aplicação React para buscar informações de usuários do GitHub utilizando a API oficial do GitHub. Este projeto é ideal para praticar consumo de APIs, manipulação de dados no React e estilização com CSS.

## O que este projeto faz?

Este aplicativo permite que os usuários pesquisem perfis do GitHub pelo nome de usuário. Ao realizar a busca, ele exibe as seguintes informações sobre o perfil encontrado:

- Foto de perfil.
- Nome de exibição.
- Biografia (quando disponível).
- Número de repositórios públicos.
- Lista dos repositórios públicos com links para cada um.

A interface é intuitiva, responsiva e estilizada para oferecer uma boa experiência ao usuário.

## Funcionalidades

- **Busca Dinâmica**: Digite o nome de usuário do GitHub para encontrar informações de forma rápida.
- **Detalhes do Perfil**: Exibição de informações detalhadas do perfil do usuário:
  - Nome
  - Bio
  - Repositórios públicos
  - Foto de perfil
- Listagem dos repositórios públicos do usuário.
- **Lista de Repositórios**: Confira os repositórios públicos do usuário com links diretos.
- **Interface Responsiva**: Funciona bem em dispositivos móveis e desktops.
- **Estilização Moderna**: Interface limpa com design atrativo.

## Demonstração

[Link para o projeto ao vivo](https://github.com/MuriloJrSis/github-user-search-app)

## Prints

![Tela Inicial](link-para-imagem)
![Detalhes do Perfil](link-para-imagem-detalhe)

## Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface do usuário.
- **Fetch API**: Para comunicação com a API do GitHub.
- **CSS Flexbox/Grid**: Para estilização e layout responsivo.
- **Devicon**: Ícones de tecnologia.

## Pré-requisitos

- Node.js instalado
- Navegador atualizado

## Como Rodar o Projeto

## Como executar o projeto localmente

1. Clone o repositório:
    ```bash
    git clone https://github.com/SeuUsuario/github-user-search-app.git
    ```

2. Navegue até a pasta do projeto:
    ```bash
    cd github-user-search-app
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Inicie a aplicação:
    ```bash
    npm start
    ```

5. Acesse no navegador:
    [http://localhost:3000](http://localhost:3000)

## Estrutura do projeto

github-user-search-app/
├── public/              # Arquivos públicos (favicon, index.html, etc.)
├── src/                 # Código-fonte do projeto
│   ├── components/      # Componentes reutilizáveis
│   ├── styles/          # Arquivos de estilo (CSS)
│   ├── App.js           # Componente principal
│   ├── index.js         # Ponto de entrada do React
│   └── ...              # Outros arquivos do projeto
├── .gitignore           # Arquivos/folders ignorados pelo Git
├── package.json         # Dependências e scripts
└── README.md            # Documentação do projeto

## API Utilizada

GitHub API
Documentação oficial: GitHub REST API
Endpoints utilizados:
Buscar usuário: https://api.github.com/users/{username}
Listar repositórios: https://api.github.com/users/{username}/repos

## Melhorias Futuras

Implementar paginação na listagem de repositórios.
Adicionar testes unitários.
Suporte a múltiplos idiomas.
Estilizações mais avançadas.

## Autor

Murilo Júnior

https://github.com/MuriloJrSis
LinkedIn

Licença
Este projeto está licenciado sob a MIT License.


