/**
 * Funções auxiliares ao projeto
 * @public
 * @author Diego Mendes Rodrigues
 */

/**
 * Filtrar as ocorrências das palavras em parágrafos
 * @param {*} paragrafo 
 * @returns 
 */
function filtrarOcorrenciasPalavras(paragrafo) {
  return Object.keys(paragrafo).filter(palavra => paragrafo[palavra] > 1)
}

/**
 * Criar o texto que será armazenado no arquivo de saída, com as palavras
 * duplicadas em cada parágrafo
 * @param {*} listaPalavras 
 * @returns 
 */
function montarTextoSaidaArquivo(listaPalavras) {
  let textoFinal = ''

  listaPalavras.forEach((paragrafo, indice) => {
    const palavrasDuplicadas = filtrarOcorrenciasPalavras(paragrafo).join(', ')
    if (palavrasDuplicadas.length > 0) {
      textoFinal += `Palavras duplicadas no parágrafo ${indice + 1} = ${palavrasDuplicadas} \n`
    }
  })

  return textoFinal
}

export { montarTextoSaidaArquivo }