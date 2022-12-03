** SOLID: Dependency inversion principle

Depender de abstrações e não de implementações.

Deacordo com Uncle Bob: módulos de alto nível não devem depender de módulosde baixo nível. Ambos devem depender da abstração.

Módulo de alto nível é aquele que depende de outros módulos. já, os módulos de baixo-nível nã dependem de ninguém.podem ser as entidades e ergras de negócio.

Por exemplo: para recuperar a senha em uma aplicação, a classe deve se conectar ao banco de dados e com issso, criar uma instâcia dele. Isto gera um alto acoplamento e torna muito dificil a troca do banco no futuro. Também não conseguiriamos reaproveitar tal classe. Neste caso, estaríamos dependendo de uma implementação e não de uma abstração.