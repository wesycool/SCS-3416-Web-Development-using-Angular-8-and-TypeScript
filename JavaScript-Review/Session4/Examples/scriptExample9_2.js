var johnGreeter = {};
johnGreeter.name = "John";
var greeting = "Hi ";
johnGreeter.sayHi = function () {
    console.log(greeting + johnGreeter.name);
}