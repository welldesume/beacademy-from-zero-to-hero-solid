// Liskov Substitution principle
//A ideia principal do principio de substituição de Liskov é qualquer função/módulo
//que interaja com uma classe também deve ser capaz de interagir com todas as subclasses dessa classe.
//Isso significa essencialmente que uma classe é intercambiável com suas subclasses.


class FlyingBirds {
  fly(){
    console.log('Posso voar')
  }
}


class SwimmingBird{
  swim(){
    console.log('Posso nadar')
  }
}


class Penguin extends SwimmingBird {}
class Duck extends FlyingBirds {}
 
function makeFlyingBirdFly(bird){
  bird.fly()
}


function makeSwimmingbirdSwim(bird){
  bird.swim()
}

const pato = new Duck()
const pinguim = new Penguin()


makeFlyingBirdFly(pato)
makeSwimmingbirdSwim(pinguim)




// Interface Segregation Principle
// a ideia é segregar as interfaces e deixá-las menores.
// Pode ser aplicado mesmo não tendo interfaces no Javascript, utilizando classes e herança 