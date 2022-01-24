//Task-7

const input = [
    {
      name: 'Yadnyesh', Class: 'BE', yearOfPassing: 2022,
    },
    {
      name: 'Abhijet', Class: 'BE', yearOfPassing: 2001,
    },
    {
      name: 'Nikhil', Class: 'SE', yearOfPassing: 2002,
    },
    {
        name: 'Akhil', Class: 'TE', yearOfPassing: 2019,
    },
  ];
  const isEven = (num) => {
    return num % 2 == 0;
  };
const groupBy = (array, callback) => array.reduce((accumulator, currentValue) => {
    const key = callback(currentValue);
    if(accumulator[key]) {
        accumulator[key].push(currentValue);
    } 
    else {
        accumulator[key] = [currentValue];
    }
    return accumulator;
},
{},
);
groupBy(input, t => isEven(t.yearOfPassing));
