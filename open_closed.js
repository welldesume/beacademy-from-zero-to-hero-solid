//Open/Closed Principle

class tax1 {
  constructor(product, price){
    this.product = product
    this.price = price
  }

  totalPrice(tax){
    console.log(`O valor total é de R$ ${this.price + tax},00`)
  }

}

class tax2{
  constructor(product, price){
    this.product = product
    this.price = price
  }
  totalPrice(tax){
    console.log(`O valor total é de R$ ${this.price + tax},00`)
  }
} 

class tax3{
  constructor(product, price){
    this.product = product
    this.price = price
  }
  totalPrice(tax){
    console.log(`O valor total é de R$ ${this.price + tax},00`)
  }
} 

const taxes = [
  new tax1('snes', 10),
  new tax2('xbox', 20),
  new tax3('Playtation', 30)
]

function calculate(taxes){
  taxes.forEach(tax => console.log(tax.totalPrice(5)))
}

calculate(taxes)