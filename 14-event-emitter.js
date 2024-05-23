const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response',(name, id)=>{
    console.log(`data received ${name} with id ${id}`);
})

customEmitter.on('response',()=>{
    console.log(`some other logic here `);
})

customEmitter.on('res2',()=>{
    console.log(`res2 `);
})

customEmitter.emit('res2')
customEmitter.emit('response','john',34)
