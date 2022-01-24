//Task-6

    emp = {
        'salary_emp1': 1000,
        'salary_emp2': 1200,
        'salary_emp3': 1100,
        'salary_emp4': 1400,
        };
    
    let sum = 0;                            
    for (let i in emp){                     
        sum+=emp[i];
    };
    console.log('Total sum is:',sum)       
