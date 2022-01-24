//create a new promise that resolves to the value 10 after 3
seconds


new Promise(function(resolve, reject) {

  setTimeout(() => resolve(10), 3000); 

}).then(function(result) { 

  alert(result); 
  return result * 10;

});
