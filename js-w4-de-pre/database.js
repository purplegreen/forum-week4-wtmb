const fs = require('fs')
module.exports = {
    save(data) {
        // console.log(data)
        fs.writeFileSync('database.json', JSON.stringify(database))
    },
    load() {
        return JSON.parse(fs.readFileSync('database.json'))
    }
}
