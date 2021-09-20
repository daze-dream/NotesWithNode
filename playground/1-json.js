/**Practicing with JSON objects */
const fs = require('fs')
//-----------
// const book = {
//     title: 'Necronomicon',
//     author: 'CARS'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('./playground/1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('./playground/1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)