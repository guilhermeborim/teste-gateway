# Projeto Imobiliário – App Mobile

Aplicativo mobile para gerenciamento e visualização de imóveis, permitindo cadastrar, listar, visualizar detalhes e excluir imóveis

## Como rodar o projeto

#### Clone o repositório

`git clone`

#### Entrar na pasta do projeto

`cd nome-do-projeto`

#### Instale as dependências

`npm install ou yarn`

#### Rode o projeto

`npx expo start ou yarn start`

## Decisões técnicas

### Expo Router

- Navegação baseada em arquivos

- Rotas mais previsíveis

- Melhor organização entre telas públicas e privadas

### Componentização

- Componentes reutilizáveis (ex: Header, ListPropertys)

- Separação clara entre UI, hooks e regras de negócio

- Facilita manutenção e escalabilidade

### Hooks personalizados

- Reaproveitamento de lógica

- Código mais limpo

- Facilidade de testes futuros

### Tipagem com TypeScript

- Interfaces bem definidas

- Melhor validação

### O que eu faria diferente com mais tempo

#### Skeleton loaders

- Melhor feedback visual durante carregamento

#### Autenticação mais robusta

- Refresh token

- Controle de permissões por perfil

#### Telas novas

- Cadastro de usuário
- Edição de perfil
- Favoritos
