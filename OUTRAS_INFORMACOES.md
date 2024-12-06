## Artigo: Guia de importação e exportação de módulos em JS
https://www.alura.com.br/artigos/guia-importacao-exportacao-modulos-javascript

## Artigo: async/await: o que é e como usar
https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar

# Documentação do JavaScript e do Node.JS

## Documentação do MDN: objeto Promise
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise

## File System
https://nodejs.org/api/fs.html#file-system

##  fs.readFile()
https://nodejs.org/api/fs.html#fsreadfilepath-options-callback

## process.argv
https://nodejs.org/api/process.html#processargv

## flatMap
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap

## Error
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

## Guia de estilo para CLI da Heroku
https://devcenter.heroku.com/articles/cli-style-guide

## Artigo da Atlassian sobre princípios de design para CLIs
https://blog.developer.atlassian.com/10-design-principles-for-delightful-clis/

# Informações do NPM

Utilizamos o comando abaixo, para criar o arquivo package.json.

```
npm init -y
```

Depois de criado, devemos adicionar a linha ```"type": "module",```, sendo que o arquivo fica desta forma:

```
{
  "name": "javascript-com-node.js-criando-sua-primeira-biblioteca",
  "version": "1.0.0",
  "main": "index.js",
  "type":"module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}
```
Agora nossa biblioteca funciona como um módulo.

O próximo ponto é tratarmos as entradas na linha de comando, e para isso, utilizamos o **Commander.js**.

https://www.npmjs.com/package/commander

Para instalar:

```
npm install commander
```

Para termos mensagens no terminal mais agradaveis, utilizamos o **CHALK**.

https://www.npmjs.com/package/chalk

Para instalar:

```
npm install chalk
```