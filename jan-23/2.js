//Task-2
const student = {
    name : "Yadnyesh",
    age : 24,
    class : "BE"
}
const exchange = Object.fromEntries(Object.entries(student).map(([key,value]) => [value,key]));
console.log(exchange);
