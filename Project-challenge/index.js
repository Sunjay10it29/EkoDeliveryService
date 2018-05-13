const Graph = require('node-dijkstra') // Graph alogrithm
var expect = require('expect.js'); // test
const route = new Graph({

    A: { B: 1, C: 4, D: 10 },
    B: { E: 3 },
    C: { F: 2, D: 4 },
    D: { E: 1 },
    E: { A: 2, B: 3 },
    F: { D: 1 }
}) // given edges

var deliveryRoutes = [
    route.shortestPath('A', 'E', { cost: true }),
    route.shortestPath('A', 'D', { cost: true }),
    route.shortestPath('E', 'F', { cost: true }),
    route.shortestPath('A', 'F', { cost: true }),
    route.shortestPath('E', 'D', { cost: true }),
    // route.shortestPath('E', 'E', { cost: true })
] // Finding path of cheapest cost

expect([]).to.be.empty();

expect(route.shortestPath('A', 'E', { cost: true })).to.eql({ path: [ 'A', 'B', 'E' ], cost: 4 });

expect(deliveryRoutes).to.be.an(Array);

console.log("*----------------------------------------*")
console.log(deliveryRoutes)
console.log("*----------------------------------------*")


//Expected Results
//  [
    //   { path: [ 'A', 'B', 'E' ], cost: 4 },
    //   { path: [ 'A', 'C', 'F', 'D' ], cost: 7 },
    //   { path: [ 'E', 'A', 'C', 'F' ], cost: 8 },
    //   { path: [ 'A', 'C', 'F' ], cost: 6 },
    //   { path: [ 'E', 'A', 'C', 'F', 'D' ], cost: 9 }
//  ]
