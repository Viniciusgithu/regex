
//Regex que procurará o dia da semana que antecede quinta-feira

const expres = "Segunda, Terça, Quarta, Quinta, Sexta, Sábado, Domingo";

const regex = /Quarta/gi;

console.log("Que dia foi ontem?...\n")

console.log(expres.match(regex));