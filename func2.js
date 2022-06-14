var add = function(a,b) {
    return a+b
}
var mul = function(a, b) {
    return a*b
}
var sub = function(a, b) {
    return a-b
}
var div = function(a, b) {
    return a/b
}
var apply = function(f, v0, v1) {
    return f(v0, v1)
}

/* can be simplied in the below steps
console.info('add ', apply(add, 5,10))
console.info('mul ', apply(mul, 5,10))
console.info('sub ', apply(sub, 5,10))
console.info('div ', apply(div, 5,10)) */

var o = [ add, 5, 10, mul, 10, 20]
console.info('calculate: ', apply(o[0], o[1], o[2]))
console.info('calculate: ', apply(o[3], o[4], o[5]))

/* var oper0 = 3
var oper1 = 6

console.info(add(oper0, oper1))

// passing values to another function
var call = function(f) {
    console.info(f(4,5))
}
call(add) // inputting add as a function in call */