
# Pageable com Spring Boot

## Simulação de um sistema com paginação de usuários. Utilizando Spring boot + Frontend simples + Docker

### Documentação

*Como rodar o projeto:*
* Clone o repositório.
* Rode ```docker-compose up --build``` na pasta raiz para rodar o sistema.
* Acesse http://localhost/80 para visualizar o Frontend.
* É possível escolher quantos usuários aparecerão por página, utilizando o input *Usuário p/página*. Coloque um número e clique em *atualizar*.
* A cada *Atualizar*, a lista volta para a primeira página com a quantidade de usuários igual ao valor do input.
* Se o valor do input não for maior que 0, a quantidade de usuários por página será 10.

*Especificações técnicas*
* O banco de dados utilizado foi o H2, o qual é salvo em memória.
* O gerenciador de pacotes utilizado com o Maven 4
* feito com Spring boot versão 3.5.5
* Linguagem Java 21