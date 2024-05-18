// code for frequency mapping  
//____________________________________________________
function calculateElementsFrequencies(inputArray){
    const frequencies = {};
    for (const item of inputArray){
        if (frequencies[item]){
            frequencies[item]++;
        }else {
            frequencies[item] = 1;
        }
    }
    return frequencies;
}
const inputData = [1, 1, 2, 4, 4, 3, 3, 4, 5, 4, 4, 4, 3, 3];
const resultObject = calculateElementsFrequencies(inputData);
console.log(resultObject);
