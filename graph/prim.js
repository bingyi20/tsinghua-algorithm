// 最小生成树问题
function prim(graph, n) {
    const dist = new Array(n).fill(Infinity)
    const path = new Array(n).fill(0)
    let ans = 0
    dist[0] = 0
    for(let i = 0; i < graph[0].length; i++) {
        if(graph[0][i] >= 0) {
            dist[i] = graph[0][i]
        }
    }
    while(1) {
        let u = getMinDis(dist)
        if(u < 0) break
        ans += dist[u]
        dist[u] = 0
        for(let v = 0; v < graph[u].length; v++) {
            // 更新到图的距离
            if(graph[u][v] > 0 && graph[u][v] < dist[v]) {
                dist[v] = graph[u][v]
                path[v] = u
            }
        }
    }
    return ans
}

function getMinDis(dist) {
    let ans = Infinity
    dist.forEach((element, index) => {
        if(element > 0 && element < ans) {
            ans = index
        }
    });
    return ans === Infinity ? -1 : ans
}



module.exports = prim