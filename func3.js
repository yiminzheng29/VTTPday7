var greetings = function(name) {
    console.info('Hello ${name}')
}
var mkGreetings = function(name) {
    return function() {
        console.info('Hello ${name}')
    }
}

greetings('fred')
greetings('barney')

var greetBetty = mkGreetings('betty')
console.info('greetBetty: ', greetBetty)
greetBetty()
var greetFred = mkGreetings('fred')
greetFred()