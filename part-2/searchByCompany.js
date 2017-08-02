const fs = require('fs')

var results = fs.readFileSync('./clients.json')
const clients = JSON.parse(results)
const newArray = clients.filter(function(client) {
  return searchByCity(client, process.argv.slice(2).join(' '))
})
console.log(newArray)


function searchByCity(client, company) {
  return client.company.toLowerCase() === company.toLowerCase()
}
