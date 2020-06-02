const db = require('./db')
const http = require('http')

db.addCat({ name: 'biscuit', color: 'orange' })
db.addCat({ name: 'jungle', color: 'black' })
db.addCat({ name: 'smokey', color: 'grey' })
db.addCat({ name: 'fancy feast', color: 'white' })
db.addCat({ name: 'peep', color: 'orange' })
db.addCat({ name: 'bread', color: 'orange' })

var biscuit = db.findCatByName('biscuit')
var orange_cats = db.findCatsByColor('orange')

console.log('biscuit: ', biscuit)
console.log('orange cats: ', orange_cats)

const server = http.createServer((req, res) => {
    if (req.url === '/biscuit') {
        res.end(JSON.stringify(biscuit))
    }
	if (req.url === '/orange_cats') {
        res.end(JSON.stringify(orange_cats))
    }
})

server.listen(3000)
console.log(`counting requests`)
