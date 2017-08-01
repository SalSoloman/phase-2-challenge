const fs = require('fs')

var results = fs.readFileSync('./clients.json')
const clients = JSON.parse(results)
const newArray = clients.filter(function(client) {
  return searchByCity(client, 'Wisoky LLC')
})
console.log(newArray)


function searchByCity(client, company) {
  return client.company === company
}



// the difference between sync and Async fs functions is that with Sync we need to
// declare a varuable and pass the results to the varualbe but with Async
// we're using a call back function
