
# Programação para Dispositivos Móveis - Lista de Itens

Este projeto foi desenvolvido para a matéria de Programação para Dispositivos Móveis, ministrada pelo professor Thiago Goldoni Thomé.

## 📝 Enunciado do Exercício

O objetivo é criar uma aplicação para adicionar itens (como produtos, pets, pessoas, etc.) em uma lista, seguindo uma arquitetura de software definida (MVC, MVVM, MVP, Flux ou Redux).

### ✅ Requisitos Mínimos

- [x] **Entidade:** Criar uma entidade para o item com, no mínimo, um identificador e um nome/descrição.
- [x] **Regra de Negócio:** Implementar uma camada de serviço/negócio que valide duas condições antes de adicionar um novo item:
  1. O nome/descrição deve ter mais de 2 caracteres.
  2. Não deve haver outro item com o mesmo nome/descrição na lista.
- [x] **Interface (View):** A tela deve conter:
  - Um campo de entrada (`input`) para o nome do item.
  - Um botão para adicionar o item à lista.
  - A exibição da lista de itens já adicionados.

## 🏛️ Arquitetura

Para este projeto, foi utilizada uma arquitetura baseada no padrão **MVVM (Model-View-ViewModel)**.

- **Model (`src/model/Entidade.ts`):** Representa a estrutura de dados do item.
- **View (`src/view/Interface.tsx`):** A interface do usuário, responsável por exibir os dados e capturar as interações.
- **ViewModel (`src/viewModel/Controladora.ts`):** Atua como um intermediário, contendo a lógica de apresentação e o estado da `View`.
- **Business (`src/business/RegrasNegocio.ts`):** Camada de serviço que contém a lógica de negócio e as validações.

## 🚀 Como Executar

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento Expo:**
   ```bash
   npm start
   ```
   Como alternativa, você pode usar o comando `npx expo start`. Ambos farão a mesma coisa.

   Para executar em uma plataforma específica:
   ```bash
   # Para Android
   npm run android

   # Para iOS
   npm run ios

   # Para Web
   npm run web
   ```
