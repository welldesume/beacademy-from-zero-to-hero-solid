// single responsability principle

// criar uma classe para cada reggra de negócio/responsabilidade

class WeightAdviser{
  constructor(user, weight){
    this.user = user,
    this.weight = weight
  }//classe
  
  adviser(expectedWeight){
    if (this.weight >= expectedWeight){
      //this.weightAlert() elimina esse 
      weightAlert(this.user)// cria esse
    }else{
      weightAlert2(this.user)
    }
  }//metodo
}
  /*
  weightAlert(){
    console.log('Acima do peso')
  }
*/
/*A classe WeightAdviser esta com duas funções que são : cadstrando o peso e mandando o alerta, nesse caso fere o rpincipio da responsabilidade unica(classe weightAdviser/weightAlert), vamos eliminar o alerta(weightAlert) e (this.weightAlert()) , depois criaruma função (weightAlert(user))*/


function weightAlert(user){
  console.log(`${user } está acima do peso`)
}


function weightAlert2(user){
  console.log(`${user } está abaixo do peso`)
}



const marcelo = new WeightAdviser('Marcelo', 91)
marcelo.adviser(90)

const marcela = new WeightAdviser('Marcela', 75)
marcela.adviser(90)

/*Obs. aproveitei e coloquei um else para obter um resultado para abaixo do peso */