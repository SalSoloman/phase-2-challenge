const fs = require('fs')

var results = fs.readFileSync('./clients.json')
const clients = JSON.parse(results)
const newArray = clients.filter(function(client) {
  return searchByCity(client, process.argv.slice(2).join(' '))
})
console.log(newArray)


function searchByCity(client, city) {
  return client.city.toLowerCase() === city.toLowerCase()
}


// the difference between sync and Async readFile function is that with Sync we need to
// declare a varuable and pass the results to the varualbe but with Async
// we're using a call back function
