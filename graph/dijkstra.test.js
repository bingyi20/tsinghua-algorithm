const graph = require("./data")
const dijkstra = require("./dijkstra")



test('Shortest path problem', () => {
    expect(dijkstra(graph, graph.length)).toStrictEqual([0, 6, 7, 4, 16, 15, 17, 20])
})