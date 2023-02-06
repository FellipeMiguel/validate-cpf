// produto
// camiseta = cor, caneca = material
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco, cor);
  this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function (percentual) {
  this.preco = this.preco + (this.preco * percentual) / 100;
};

//function Caneca(nome, preco, material) {
//Produto.call(this, nome, preco, material);
//this.material = material;
//}
//Caneca.prototype = Object.create(Produto.prototype);
//Caneca.prototype.constructor = Caneca;

const camiseta = new Camiseta("Regata", 89.99, "Preta");
camiseta.desconto(50);
console.log(camiseta);
//
//const caneca = new Caneca("Caneca", 99.99, "Porcelana");
//caneca.desconto(10);
//console.log(caneca);
