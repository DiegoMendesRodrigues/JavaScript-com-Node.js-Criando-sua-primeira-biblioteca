/**
 * Funções para trabalhar com parágrafos e palavras dos documentos
 * @public
 * @author Diego Mendes Rodrigues
 */

/**
 * Extrair as palavras duplicadas nos parágrafos do texto
 * @param {*} texto 
 * @returns 
 */
export function contarPalavras(texto) {
  const paragrafos = extrairParagrafos(texto)
  const contagem = paragrafos.flatMap((paragrafo) => {
    if (!paragrafo) return []
    return verificarPalavrasDuplicadas(paragrafo)
  })
  return contagem
}

/**
 * Extrair os parágrafos do texto, deixando as letras todas em minísculo
 * @param {*} texto 
 * @returns 
 */
function extrairParagrafos(texto) {
  return texto.toLowerCase().split('\n')
}

/**
 * Limpar os caracteres especiais das palavras extraídas dos parágrafos
 * @param {*} palavra 
 * @returns 
 */
function limparPalavras(palavra) {
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
}

/**
 * Deixar na listagem de palavras, apenas as que possuem pelo menos 3 caracteres,
 * eliminando resultados como: e, ou, se, ...
 * @param {*} texto 
 * @returns 
 */
function verificarPalavrasDuplicadas(texto) {
  const listaPalavras = texto.split(' ')
  const resultado = {}

  listaPalavras.forEach(palavra => {
    if (palavra.length >= 3) {
      const palavraLimpa = limparPalavras(palavra)
      resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1
    }
  });

  return resultado
}
