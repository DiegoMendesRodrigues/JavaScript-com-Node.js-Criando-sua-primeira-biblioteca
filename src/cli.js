/**
 * Biblioteca para localizar palavras repetidas nos parágrafos 
 * de um arquivo texto
 *  * Forma de uso:
 * node src/cli.js -t [nome arquivo] -p [pasta do arquivo]
 * node src/cli.js -t texto-aprendizado.txt -p ./arquivos/
 * @public
 * @author Diego Mendes Rodrigues
 */
import path from 'path'
import chalk from 'chalk'
import { Command } from 'commander'
import { lerArquivo } from "./arquivos.js"

const programa = new Command()
programa
  .version('1.0.0')
  .description('Biblioteca para localizar palavras repetidas nos parágrafos de um arquivo texto')
  .option('-t, --texto <string>', 'Arquivo de texto a ser processado')
  .option('-p, --pasta <string>', 'Caminho da pasta referente ao arquivo texto que será processado')
  .action((options) => {
    const { texto, pasta } = options

    if (!texto || !pasta) {
      console.error(chalk.red('Erro: Favor inserir o arquivo que será processado, além Caminho da pasta referente ao arquivo texto que será processado'))
      programa.help()
      return
    }

    const caminhoTexto = path.resolve(pasta + texto)
    try {
      lerArquivo(caminhoTexto)
    } catch (erro) {
      console.error(chalk.bgRed('Ocorreu um erro no processamento', erro))
    }
  })
  .parse(process.argv)
