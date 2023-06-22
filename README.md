
# Expressões regulares
Este repositório é dedicado a fornecer recursos e exemplos práticos para aprender e aprimorar habilidades em expressões regulares. Transbordando o valor inicial de ser um acerto pessoal, busco ajudar estudantes, desenvolvedores e entusiastas a compreender e dominar o poder das expressões regulares.

## Stack utilizada

Importante salientar que foi utilizado **JavaScript** para os estudos.


## Indicação de Livro

**Expressões Regulares - Uma abordagem divertida** Aurelio Marinho Jargas (www.aurelio.net) junto com a editora Novatec (www.novatec.com.br), trouxe um perfeito livro que explora os conceitos básicos das expressões regulares e fornece exemplos práticos para sua aplicação.

**Apresentando as Expressões Regulares** 

"Bem resumido uma expressão regular é um método formal de se especificar um padrão de texto" p.19

"Mais detalhadamente, é uma composição de símbolos, caracteres com funções especiais, que, agrupados entre si e com caracteres literais, formam uma sequência, uma expressão. Essa expressão é interpretada como uma regra que indicará sucesso se uma entrada de dados qualquer casar com essa regra, ou seja, obedecer exatamente a todas as suas condições." p.19



## Rodando os testes

Para rodar os testes, utilizei o VSCode. 

Dentro do VSCode, utilizei o plugin: Code Runner (CTRL + ALT + N). Além, é necessário ter o Nodejs (node nome_arquivo.js).

Escolha a melhor IDE para você. 

Caso prefira rodar de forma online, indico acessar: regex101.com

Primeira expressão para reconhecer o Hello World, observa-se que já está incluído o conceito de flags. Isto é:  

g -  global

i - ignore case

```bash
  const start = "Hello World";

  const regex = /Hello World/gi;

  console.log(start.match(regex));
```


