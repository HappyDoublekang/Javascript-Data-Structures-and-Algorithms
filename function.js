function sum(num1, num2) {
    return num1 + num2;
}
var result = sum(1, 2);
console.log(result);

function book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}