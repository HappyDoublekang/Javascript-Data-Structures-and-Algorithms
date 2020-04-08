// var let const 作用域（全局作用域、函数作用域、块级作用域、动态作用域（this关键字））
// 1、函数作用域
function text() {
    var a = 3
    // 块级作用域if块
    if (a === 3) {
        var b = 4
        console.log('abc')
    } else {
        console.log('abcd')
    }
    console.log(b) // var声明的块级变量在块级外部依然可以获取到（所以块级作用域不生效）
    return a + 4
}
console.log(text())
console.log(a) // 函数作用域内部的a外部就拿不到

