# ZYX Logistics - Sistema de Controle de Cargas e Expedição

## Descrição
Este sistema foi desenvolvido para gerenciar o controle de cargas recebidas e expedições, permitindo adicionar, editar, excluir e gerar relatórios em PDF para o checklist de expedição.

## Funcionalidades
- **Controle de Cargas:**
1. Adicionar Carga: Permite registrar uma nova carga com a descrição, data de recebimento e status.
2. Editar Carga: Permite editar as informações de uma carga existente.
3. Excluir Carga: Permite excluir uma carga do banco de dados.

- **Expedição:**
1. Adicionar Item de Checklist: Permite adicionar um item de checklist para expedição.
2. Editar Item de Checklist: Permite editar a descrição e o status de um item do checklist.
3. Excluir Item de Checklist: Permite excluir um item do checklist de expedição.
4. Gerar Relatório em PDF: Gera um PDF contendo todos os itens do checklist de expedição com suas descrições e status.

## Tecnologias utilizadas
- **Frontend:**
1. Next.js: Framework React para construção da aplicação.
2. React: Biblioteca para construção da interface.
3. Axios: Para fazer requisições HTTP para o backend (json-server).
4. jsPDF: Biblioteca para gerar relatórios em PDF.

- **Backend:**
1. JSON Server: API falsa (fake API) para armazenar os dados de cargas e checklist no formato JSON.

- **Outras Depedências:**
1. CSS: Estilização básica usando CSS em módulos.
2. React Hooks: Para gerenciar o estado e os efeitos colaterais.

## Como Rodar o projeto
- **Pré-requisitos. Certifique-se de ter os seguintes programas instalados em sua máquina:**
1. Node.js (Versão 16 ou superior).
2. npm (gerenciador de pacotes do Node.js) - Vem junto com o Node.js.

- **Passos para Configuração:**
1. Clone o repositório:
git clone https://github.com/IagoGoncalves/zyx-logistics.git
cd zyx-logistics

2. Instale as dependências do projeto:
npm install

3. Configuração do Backend (json-server):
npx json-server --watch db.json --port 5000

4. Iniciar o Frontend:
npm run dev

## Endpoints da API (json-server)
1. GET /cargas: Retorna todas as cargas recebidas.
2. POST /cargas: Adiciona uma nova carga.
3. PUT /cargas/:id: Atualiza as informações de uma carga.
4. DELETE /cargas/:id: Exclui uma carga.
5. GET /checklist: Retorna todos os itens do checklist de expedição.
6. POST /checklist: Adiciona um novo item no checklist de expedição.
7. PUT /checklist/:id: Atualiza as informações de um item do checklist.
8. DELETE /checklist/:id: Exclui um item do checklist.