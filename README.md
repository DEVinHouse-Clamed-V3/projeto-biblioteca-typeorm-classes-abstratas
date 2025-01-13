
Resumo do Projeto:

O projeto é uma aplicação backend construída com o Node.js usando o framework Express e a biblioteca TypeORM para interação com o banco de dados. A aplicação gerencia a entidade Leitor, que representa um leitor de uma biblioteca, e implementa várias rotas para realizar operações CRUD (Criar, Ler, Atualizar, Deletar).

Funcionalidades Principais:
Criar um Leitor (POST /):

Permite adicionar um novo leitor à biblioteca.
Valida a presença de informações essenciais como nome, e-mail, número de telefone, data de nascimento, endereço e status ativo.
Em caso de sucesso, o leitor é armazenado no banco de dados e a resposta retorna os dados do leitor recém-criado.
Buscar Todos os Leitores (GET /):

Retorna uma lista de todos os leitores cadastrados na biblioteca.
Em caso de erro, a resposta será um código 500 com a mensagem de erro.
Buscar Leitor por ID (GET /:id):

Permite buscar as informações de um leitor específico pelo seu ID.
Se o leitor não for encontrado, retorna um erro 404.
Atualizar Leitor (PUT /:id):

Permite atualizar informações de um leitor, como nome, e-mail, telefone, endereço e status ativo.
Caso o leitor não seja encontrado, retorna um erro 404.
Deletar Leitor (DELETE /:id):

Permite deletar um leitor pelo seu ID.
Se o leitor for encontrado, ele é removido do banco de dados e a resposta retorna um status de sucesso (204).
Banco de Dados:
A tabela leitores no banco de dados é gerida através do TypeORM, que define uma estrutura de banco de dados para a entidade Leitor. O banco de dados contém os seguintes campos:

id: Identificador único (inteiro e autoincrementável).
name: Nome do leitor (string).
email: E-mail do leitor (string).
phone_number: Número de telefone do leitor (string).
birthdate: Data de nascimento do leitor (data).
address: Endereço do leitor (texto).
active: Status de ativação do leitor (booleano, com valor padrão de true).
created_at: Data de criação (timestamp).
updated_at: Data da última atualização (timestamp).
A migração CreateTableLeitores é responsável pela criação da tabela leitores no banco de dados, definindo as colunas e seus tipos.

Resumo de Arquitetura:
Roteamento (Express): As rotas são configuradas no arquivo leitor.routes.ts, onde são definidos os métodos HTTP para as ações CRUD.
Banco de Dados (TypeORM): A entidade Leitor é mapeada para a tabela leitores, com os campos definidos no arquivo de migração.
Validação: Antes de realizar qualquer operação de criação ou atualização, o código valida a presença dos dados essenciais.
Mensagens de Erro: Em casos de erro, as respostas são personalizadas com mensagens apropriadas, e o código de status HTTP é ajustado conforme o tipo de erro.
Fluxo de Funcionamento:
O usuário pode enviar uma requisição HTTP para uma das rotas configuradas.
O servidor valida os dados (se necessário), interage com o banco de dados para realizar a operação e retorna a resposta correspondente.
O banco de dados armazena ou atualiza os dados conforme as operações executadas.
Tecnologias Utilizadas:
Node.js (Backend)
Express (Framework para roteamento)
TypeORM (ORM para interação com o banco de dados)
PostgreSQL (ou outro banco de dados relacional) para persistência dos dados.
Este projeto serve como uma API básica para gerenciar os leitores de uma biblioteca, permitindo criar, ler, atualizar e excluir registros de leitores.