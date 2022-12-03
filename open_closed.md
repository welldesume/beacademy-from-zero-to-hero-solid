** SOLID: Open-closed principle

Objetos ou entidades devem estar abertos para a extensão, mas fechados para modificação. Se novos comportamentos precisarem ser adicionados no código, deve-se estender e não alterar o código original.

Ex. Em um sistema de uma empresa, eciste o cadastro de funcionários em regime CLT. No caso caso de novos funciónarios contratados em regimePJ, devemos estender o código que trata dos funcionários em regime CLT. Isto é diferente de modificar a classe para que ela trate dos dois regimes de contratção.

Podereia-se pensar que apenas mais um if no algoritimo resolveria o problema. Porém iríamos modificar algo que já está funcionando. Alterar uma classe para colocar novos métodos seria arriscado, visto que podemos introduzir novos 'bugs'.

Por isso, diz-se que a classe deve estar fechada para modificação, mais aberta para extesão