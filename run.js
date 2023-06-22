//Métodos Regex

const text = '0,1,2,3,4,5,A,b,C,f,H,I,K,V';

//Método RegExp()
const regexFive = RegExp('5');

//Método test(), a partir de uma expressão regular, irá retornar: True or False
console.log(regexFive.test(text));
//Nesse exemplo, a saída será: true

//Método exec()
console.log(regexFive.exec(text));
/*
Nesse exemplo, a saída será um array: 
[
  '5',
  index: 10,
  input: '0,1,2,3,4,5,A,b,C,f,H,I,K,V',
  groups: undefined
] */



//Métodos para string
const regexString = /[a-w]/g;

//Método match()
console.log(text.match(regexString));

//Nesse exemplo a saída será um array: ['b', 'f']

//Método serch()
console.log(text.search(regexString));

//Nesse exemplo a saída será o primeiro índice que será encontrado a regex, 14



/*
Método replace() substitui o elemento que você encontrou na regex por algum outro texto.
Como primeiro parâmetro, passa a Regex e no segundo, pelo o que você quer substituir.
*/

console.log(text.replace(regexString, '✔️'));
//Nesse exemplo a saída foi: 0,1,2,3,4,5,A,✔️,C,✔️,H,I,K,V


//Método split(), necessário para separar um texto. Irá gerar um array. 
console.log(text.split(regexString));
//Nesse exemplo a saída foi: [ '0,1,2,3,4,5,A,', ',C,', ',H,I,K,V' ]







