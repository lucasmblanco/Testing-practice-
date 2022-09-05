const analyzeArray = function(arr){
    const sortedArr = arr.sort(); 
    const obj = {}
    obj.average = sortedArr[Math.ceil(sortedArr.length / 2)];
    obj.min = sortedArr[0];
    obj.max = sortedArr[sortedArr.length - 1];
    obj.length = sortedArr.length; 
    return obj 
}

export default analyzeArray