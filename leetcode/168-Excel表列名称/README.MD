# Excel表列名称

## 题目描述
给你一个整数 columnNumber ，返回它在 Excel 表中相对应的列名称。

例如：
```js
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
```

示例1:
```js
输入：columnNumber = 1
输出："A"
```

示例 2：
```js
输入：columnNumber = 28
输出："AB"
```

示例 3：
```js
输入：columnNumber = 701
输出："ZY"
```

示例 4：
```js
输入：columnNumber = 2147483647
输出："FXSHRXW"
```


## 构思

变化规律
数字从 1 - 26，27向前进一，咋一看像26进制转换，但是26之后没有 'A0'这样进1的中间位，而是直接 'AA'，所以是一种不同于一般形式的26进制转换
实现步骤：
短除法：
1. 如果 x > 26 

