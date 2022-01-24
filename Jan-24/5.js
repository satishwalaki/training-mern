//Write a function that duplicates each char in a string. If I pass
//'abc' to the function, it should return 'aabbcc'. We will reuse this
//function, so make it reusable.

function charDuplicate(str,noOfDuplicates){
    var newStr="";
    for (let i=0; i<str.length; i++) {
        newStr +=str.charAt(i).repeat(parseInt(noOfDuplicates));
        
    }

    return newStr;
    
}

console.log(charDuplicate("abc",2));

