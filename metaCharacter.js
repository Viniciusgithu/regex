
/* 

Os metacaracteres:   . ? / * + ^ $ | [] {} () \  

Estão divididos em quatro grupos distintos: 

1.Representantes:

.  => Ponto => Um caractere qualquer
[...] => Lista => Lista de caractere permitidos
[^...] => Lista negada => Lista de caracteres proibidos

-----------------------------------------------------------

2.Quantificadores

? => Opcional => Zero ou um
* => Asteisco => Zero, um ou mais 
+ => Mais => Um ou mais
{n,m} => Chaves => De n até m 

-----------------------------------------------------------

3.Âncoras

^ => Circunflexo => Início da linha
$ => Cifrão => Fim da linha
\b => Borda => Início ou fim de uma palavra

-----------------------------------------------------------

4.Outros


\c => Escape => Torna literal o caractere C
| => Ou => Ou um ou outro
(...) => Grupo => Delimita o grupo
\1...\9 => Retrovisor => Texto casado nos grupos 1...9

-----------------------------------------------------------


Respondendo Aurelio Marinho, na pergunta que ele faz no início do capítulo 2, fiquei sim com frio na barriga! 😁

*/

const text = 'Os.Meta!chaR,aCter Sao10?';

const regex = /,|\.|\?|!| /gi;

console.log(text.split(regex));