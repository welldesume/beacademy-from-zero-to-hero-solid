**  SOLID: Interface segregation principlee  

Uma classe não deve ser forçada a implememtar interfaces  métodos que não serão utilizados. É preferível criar interfaces mais especificas em vez de uma única interface genérica.

Exemplo:
No caso de um jogo podemos ter personagens que são soldados. Porém existem os soldados de um país e de outro. Então em vez de criar uma classe que cuida de todos os soldados, podemos criar classes que se referem a cada grupo de forma mais especifica Classe soldadosAliados x classe soldadosDoEixo.

Com isso, poderíamos ter uma classe para soldados e desta, extender para () de soldados,herdando as propriedades e métodos gerais. Isto vantajoso() código. 