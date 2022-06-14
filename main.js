/* 
function greetings(name) 
    {console.info("hello, ${name}")
    System . out . printf("Hello %s", name)

} */
var fred = 'fred'
var greetings = function (name) {
    console.info('Hello ${name}')
}


console.info("hello, world")
greetings('fred')
greetings('barney')

/* var value = 3.14   // declare a variable
greetings(value)
var result = value + 4
console.info(result)
value = "betty"
greetings(value)
result = value + 4
console.info(result) */


console.info(fred)
console.info('greetings: ', greetings) 
greetings(fred) // since greetings is a function, this command will call the function

var hello = greetings
console.info('hello: ', hello)
hello('betty') 
