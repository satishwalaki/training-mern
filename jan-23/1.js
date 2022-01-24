// Task 1
function unique_characters (string)  {                            
    for(let i = 0; i < string.length; i++){
        const element = string[i];
                if(string.indexOf(element) !== string.lastIndexOf(element)){            
                    return false;
                };
            };
            return true;
        };
    console.log(unique_characters("apple"));
