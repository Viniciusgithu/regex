// O ponto . "é o nosso curginda solitário, que está sempre à procura de um casamento, não importa com que seja"

const text = 'Os.Meta!chaR,aCter Sao10?';

const regex = /./gi;

//Se eu quiser encontrar todas a letras e números individualmente?
console.log(text.match(regex));

//Se eu quiser achar o Sao?
const regex2 = /s.o/gi;
console.log(text.match(regex2));   