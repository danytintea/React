function getFibonacciNumberByIndex(index, map={}){

    if(index<=2){
    return 1;
    }

    if(map[index]){
        return map[index];
    }
    
    map[index] =  getFibonacciNumberByIndex(index-2, map)+getFibonacciNumberByIndex(index-1, map);
    return map[index];

}


console.log(`Fibb number for index 1 is ${getFibonacciNumberByIndex(1)}`);
console.log(`Fibb number for index 3 is ${getFibonacciNumberByIndex(3)}`);
console.log(`Fibb number for index 6 is ${getFibonacciNumberByIndex(6)}`);

const start = new Date().getTime();

console.log(`Fibb number for index 6 is ${getFibonacciNumberByIndex(6)}`);

const end = new Date().getTime();

const ellapsed = parseFloat((end-start)/1000).toFixed(3);
console.log(`Found in ${ellapsed} sec`);