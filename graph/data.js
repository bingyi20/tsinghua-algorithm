const graph = [
    [-1, 6, 7, 4, -1, -1, -1, -1],
    [6, -1, 2, -1, 13, 9, -1, -1],
    [7, 2, -1, -1, 11, -1, -1, -1],
    [4, -1, -1, -1, -1, 12, -1, -1],
    [-1, 13, 11, -1, -1, 1, 5, 8],
    [-1, 9, -1, 12, 1, -1, 2, 10],
    [-1, -1, -1, -1, 5, 2, -1, 3],
    [-1, -1, -1, -1, 8, 10, 3, -1]
]


module.exports = graph

// let n = graph.length
// let success = true
// for(let i = 0; i < n; i++) {
//     for(j = 0; j <= i; j++) {
//         if(graph[i][j] != graph[j][i]) {
//             success = false
//             break
//         }
//     }
// }

// if(success) {
//     console.log("Accept")
// }else{
//     console.log("Error")
// }
