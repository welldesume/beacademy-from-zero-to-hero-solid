** Solid

Principios da programação orientada a objetos. Facilitam o desenvolvimento e a manutençao de uma aplicação.
SOLID é uma sigla criada por Michael Feathersao observar os cinco principios da orientação a objetos e design de códigos criados por Robert C. Martin (Uncle Bob).

S - Single Responsiblity Principle( Princípio da responsabilidade única)
O - Open-Closed Principle (Princípio Aberto-Fechado)
L - Liskov Substituion Principle (Princípio da substituição de Liskov)
I - Interface Segragation Principle (Princípio da Segregação da Interface)
D - Dependency Inversion Principle (Princípio da inversão da dependência)


* SOLID: Single Responsiblity Principle

Uma classe (ou métodos e funções) deve er somente um motivo para mudar. Ou seja, uma classe de possuir apenas uma responsabilidade dentro do software, tendo apenas uma tarefa ou ação para execultar.

Ex. uma classe que faz uma consulta no banco de dados buscando pela lista de clientes de uma loja. Esta classe deve retornar e listar quando for feita uma requisição no sistema. A ela não deve ser repassada mais nenhuma tarefa como por exemplo, retornar a lista e mostrar um número total de clientes.

Caso este princípio não seja respeitado, problemas podem ocorrer com dificudade de reutilazação de código ede teste automizados.