const calculator = function(a,b,type){
      switch(type){
        case 'sum': 
            return a + b;
        case 'subtract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
      }
}

export default calculator