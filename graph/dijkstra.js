// 最短路径问题(单源点)


function dijkstra(graph, n) {
    const dist = new Array(n).fill(Infinity)
    const path = new Array(n).fill(-1)
    // 从0开始查找
    dist[0] = 0

    while(1) {
        // O(n)时间复杂度，可以利用优先队列堆降到O(logn)
        let u = getMin(dist)
        // 不存在这样的u了，证明遍历完毕
        if(u === -1) break
        for(let v = 0; v < n; v++) {
            if(0 < dist[v] && dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v]
            }
        }
        // 标记为负数表示被收集
        dist[u] = -dist[u]
    }

    let ans = dist.map(e => -e)
    console.log(ans)
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