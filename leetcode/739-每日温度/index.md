# 739. 每日温度

### 分析
需要找到最靠近当前温度最近的大于当前温度的天数，即需要找到第1个比当前温度大的数
```
输入: temperatures = [73,74,75,71,69,72,76,73]
输出: [1,1,4,2,1,1,0,0]
```

### 解决方案使用一个栈存储