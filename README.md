# teste-swapi-caiophelipe
Este repositório contém uma série de testes automatizados utilizando a biblioteca Jest e Supertest para realizar requisições à SWAPI (Star Wars API). Os testes verificam as respostas da API para diferentes endpoints de pessoas, planetas e naves estelares do universo Star Wars.

Estrutura dos testes
Os testes são organizados para verificar:

Respostas bem-sucedidas (status 200): Confirmam se o endpoint retorna os dados esperados para entidades específicas (como personagens, planetas e naves) e se as propriedades críticas estão presentes e são válidas.
Erros esperados (status 404): Garantem que, ao requisitar uma entidade inexistente, a API retorna o código de erro correto (404) com uma mensagem detalhada especificando "Not found".
