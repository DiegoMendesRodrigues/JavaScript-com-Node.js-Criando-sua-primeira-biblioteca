/**
 * Tratamento de arquivos na biblioteca
 * @public
 * @author Diego Mendes Rodrigues
 */
/** 
 * Promessa -> pending -+---> fulfilled
 *                      +---> reject
 * 
 * Forma moderna de utilização:
 * async - Colocado na linha da criação da função
 * await - Colocado na linha em que será executado o método assíncrono
 * 
 * Forma antiga de utilização:
 * .then()
 * .catch()
 * .finally()
 */
import fs from 'fs'
import path from 'path'
import chalk from 'chalk'
import tratarErros from './erros/funcoesErro.js'
import { contarPalavras } from './palavrasParagrafos.js'
import { montarTextoSaidaArquivo } from "./helpers.js"

const pastaResultados = './resultados/'

/**
 * Ler o arquivo onde as palavras dos parágrafos serão analisadas
 * Após ler o arquivo, ela chama a função que salva os resultados
 * @param {*} caminhoArquivo 
 */
export function lerArquivo(caminhoArquivo) {
  fs.readFile(caminhoArquivo, 'utf-8', (erro, texto) => {
    try {
      if (erro) {
        throw erro
      }
      const resultado = contarPalavras(texto)
      const nomeArquivo = caminhoArquivo.split('\\').pop().split('.')[0]
      criarESalvarArquivo(resultado, nomeArquivo)
    } catch (erro) {
      tratarErros(erro)
    }
  })
}

/**
 * Criar e salvar o arquivo com os resultados da análise realizada
 * Forma atual da utilização das promessas é com async/await
 * @param {*} listaPalavras 
 * @param {*} nomeArquivo 
 */
async function criarESalvarArquivo(listaPalavras, nomeArquivo) {
  const caminho = `${pastaResultados}${nomeArquivo}-resultado.txt`
  const caminhoResultado = path.resolve(caminho)
  const textoListaPalavras = montarTextoSaidaArquivo(listaPalavras)
  try {
    await fs.promises.writeFile(caminhoResultado, textoListaPalavras)
    console.log(chalk.bgGreen('Arquivo criado!'))
  } catch (erro) {
    throw erro
  }
  console.log(chalk.bgGreen('Operação finalizada!'))
}

/**
 * Criar e salvar o arquivo com os resultados da análise realizada
 * Forma antiga da utilização das promessas, com then(), catch(), finally()
 * @param {*} listaPalavras
 * @param {*} nomeArquivo
 */
// function criarESalvarArquivo(listaPalavras, nomeArquivo) {
//   const caminho = `${pastaResultados}${nomeArquivo}-resultado.txt`
//   const caminhoResultado = path.resolve(caminho)
//   const textoListaPalavras = montarTextoSaidaArquivo(listaPalavras)

//   fs.promises.writeFile(caminhoResultado, textoListaPalavras)
//     .then(() => {
//       /* Processamento feito com o resultado da promessa */
//       console.log('Arquivo criado!')
//     })
//     .catch((erro) => {
//       throw erro
//     })
//     .finally(() => {
//       console.log('Operação finalizada!')
//     })
// }
