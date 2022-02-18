const { expect } = require("@jest/globals")
const graph = require("./data")
const prim = require("./prim")

const n = graph[0].length


test('minimum spanning tree', () => {
    expect(prim(graph, n)).toBe(32)
})

