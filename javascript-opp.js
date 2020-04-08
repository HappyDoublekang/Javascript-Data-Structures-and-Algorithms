// create Object
var obj = new Object()

var obj = {
    name: {
        first: 'Gandalf',
        last: 'the Grey'
    },
    adress: 'Middle Earth'
}

// console.log(obj)

// 在OPP中对象是类的实例
// 申明一个Book类
function Book(title, pages, isbn) {
    this.title = title
    this.pages = pages
    this.isben = isbn
}

// 实例化这个类就可以得到
var book = new Book('111', '222', '333')

// 三种方式获取对象value

// 1、直接点出
console.log(`1----${book.title}`)

// 2、类可以包含函数，可以声明和使用函数
Book.prototype.printTitle = function () {
    console.log(`2----${this.title}`)
}
book.printTitle()
 
// 3、在类中声明函数
function Book(title, pages, isbn) {
    this.title = title
    this.pages = pages
    this.isbn = isbn
    this.printTitles = function () {
        console.log(`3----${this.title}`)
    }
}
book.printTitles()