// 测试
// 封装常用的js代码
var kits = [];
// 获取指定区间的随机整数方法
kits.randomInt = function(n, m) {
    return Math.floor(Math.random() * (m - n + 1) + n);
};
