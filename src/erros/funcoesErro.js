/**
 * Tratamento de erros
 * @public
 * @author Diego Mendes Rodrigues
 */
import chalk from 'chalk'

export default function tratarErros(erro) {
  if (erro.code === 'ENOENT') {
    console.error(`${erro.name}: ${erro.message}`)
    throw new Error('Arquivo não encontrado')
    //return 'Arquivo não encontrado'
  } else {
    console.error(chalk.bgRed(`${erro.name}: ${erro.message}`))
    return 'Erro na aplicação'
  }
}