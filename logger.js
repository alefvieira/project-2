const EventEmitter = require('events')
// vai passar para o arquivo txt o msg do sistema
const fs = require('fs')
// independente da maquina que eu estiver pegando ele vai localizar onde o arquivo vai estar
const path = require('path')
const emitter = new EventEmitter()


emitter.on('log', (message) =>{
    fs.appendFile(path.join(__dirname, 'log.txt'),message, err=>{
        if(err) throw err
    })
})
// emitter.emit('log', "Mensagem que eu quero")
function log (message){
    
    emitter.emit('log', message)
}
// log("passar uma mensagem")

module.exports = log