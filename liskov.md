** SOLID Liskov substitution principle

Por Barbara Liskov.
Se 'S' é um 'T', então os objetos do tipo 'T', em um programa, podem ser substituidos pelos objetos de tipo 'S' sem que seja necessário alterar as propriedades deste programa. Wikipedia.

Se a classe 'B' herda de clase 'A' deverá ser possível usar 'B' no lugar de 'A'. Também é possível dizer que classes filhas podem violar as regras de uma classe pai.

class Bird{
  fly(speed){
    return `Flying at ${speed} km/h`;
  }
}

class Eagle extends Bird{
  dive(){
    return `I can dive`;
  }
}

//LSP Violation:
class Penguin extends Bird{
  fly(){
    return new Error("Sorry, I cant fly");
  }
}