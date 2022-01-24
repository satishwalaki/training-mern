function processEvenNumber(num){
    console.log("Number " + num + " is even!");
}
function processOddNumber(num){
    console.log("Number " + num + " is odd!");   
}
function processNumber(num, 
oddCallbackFunction, 
evenCallbackFunction)
{
    console.log("Processing number!");
    if(num % 2 == 0){
        evenCallbackFunction(num);
    } else {
        oddCallbackFunction(num);
    }
}
var testNumbers = [3, 6, 7, 9, 1, 2];
testNumbers.forEach(function(num){
    processNumber(num, processOddNumber, processEvenNumber)
});
