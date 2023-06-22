
/* 

 Regex que irá verificar:
 1. Arquivos.mp3  => Deve aparecer quatro mp3


*/

const files = "lista de arquivos mp3 : jazz.mp3, rock.mp3, samba.mp3, blues.mp3";

const regex = /\.mp3/gi;

console.log(files.match(regex));