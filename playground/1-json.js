/**Practicing with JSON objects */
const fs = require('fs')
//-----------
// const book = {
//     title: 'Necronomicon',
//     author: 'CARS'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('./playground/1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('./playground/1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

// Challenge coding
// 1. load the data
// const dataBuffer = fs.readFileSync('./playground/challenge_json.json')
// const dataJSON2 = dataBuffer.toString()
// data = JSON.parse(dataJSON2)
// one liner edition
const data = JSON.parse(fs.readFileSync('./playground/challenge_json.json').toString())
// 2. change the contents of that data
console.log(data);
data.name = 'DUNA';
data.age = 1099;
console.log(data)
// 3. overwrite old file or make a new one
fs.writeFileSync('./playground/newjson.json', JSON.stringify(data))