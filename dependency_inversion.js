//Dependency Inversion Principle
//Código desacoplado

class Store {
/*  constructor(){
    this.creditCard = new Visa()
  }*/
  //retira o metodo construtor acima
  constructor(brand){
    this.paymentProcess = new PaymentProcess(brand)
  }
}



class PaymentProcess {
  constructor(brand){
    this.brand = brand
  }// essa fica como o método de pagamento 
 
  

  payment(){
    console.log(`Pagou com ${this.brand}`)
  }
}



/*class Visa {
  constructor(){
    this.brand = 'Visa'
  }
}*/
//a regra de negócio fica independente

const bike = new Store(new PaymentProcess('Visa').payment())
//só vai modicar essa parte aqui tipo ('Master') ou outra bandeira