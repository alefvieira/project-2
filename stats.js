const os = require('os')
const log = require('./logger')
// OCOMANDO CONST SIGINIFICA CRIAÇÃO DE VARIAVEL
// FREEMEM É A LEITURA DA MEMORIA LIVRE
// TOTALMEM É A LEITURA DA MEMORIA TOTAL
// const freemem = os.freemem
// const totalmem = os.totalmem
setInterval(() => {
    const {freemem, totalmem} = os
    const memfree = parseInt(freemem() / 1024/ 1024)
    const totmem = parseInt(totalmem() / 1024/ 1024)
    const parcents = parseInt((memfree/totmem)*100)
    
    // console.log(memfree,"MB", totmem, "MB" ,parcents, "%")
    const stats = {
        free: `${memfree} MB`,
        total: `${totmem} MB`,
        usage: `${parcents}%`
    }
    console.clear()
    console.table(stats)
// vai salvar os stats no bloco de notas
log(`${JSON.stringify(stats)}\n`)

},1000)
