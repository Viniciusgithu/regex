
//Regex que irá verificar se há a palavra: Vaivém no texto

const padre = ' Se vaivém fosse e viesse, Vaivém ia, mas como vaivém vai e não em, vaivém não Vai.';

const regex = /Vaivém/gi;

function verifica(){
  
  if(padre.match(regex)){
    console.log("✔️")
  } else {
    console.log("🛑")
  }

}

console.log(verifica());
