function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`
}

const user1 = {
  nome: 'Lucas',
  idade: 23
}

const user2 = {
  nome: 'Valéria',
  idade: 54
}

const user3 = {
  nome: 'Claudio',
  idade: 55
}

/*Manipulação do This utilizando o método Call*/
/*console.log(calculaIdade.call(user2, 30))*/

/*Manipulação do This utilizando o método Apply*/
console.log(calculaIdade.apply(user1, [3]))
