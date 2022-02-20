// 最短路径问题(单源点)


function dijkstra(graph, n) {
    const dist = new Array(n).fill(Infinity)
    const path = new Array(n).fill(-1)
    // 从0开始查找
    dist[0] = 0
    for(let v = 0; v < graph[0].length; v++) {
        if(graph[0][v] > 0) {
            dist[v] = graph[0][v]
        }
    }
    while(1) {
        // O(n)时间复杂度，可以利用优先队列堆降到O(logn)
        let u = getMin(dist)
        // 不存在这样的u了，证明遍历完毕
        if(u === -1) break
        for(let v = 0; v < graph[u].length; v++) {
            if(0 < graph[u][v] && (dist[u] + graph[u][v] < dist[v])) {
                dist[v] = dist[u] + graph[u][v]
                path[v] = u
            }
        }
        dist[u] = -dist[u]
    }

    let ans = dist.map(e => e === 0 ? 0 : -e)
    return ans
}

function getMin(dist) {
    let ans = -1
    let min = Infinity
    dist.forEach((element, index) => {
        if(0 < element && element < min) {
            min  = element
            ans = index
        }
    });
    return ans
}




module.exports = dijkstra