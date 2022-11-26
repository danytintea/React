function getFibonacciNumberByIndex(index, map={}){

    if(index<=2){
        return 1;
    }

    const arr =new Array(index + 1).fill(1);
    for(let i=3;i<=index;i+=1){
        arr[i]=arr[i-2]+arr[i-1]
    }

    return arr[index];

}


console.log(`Fibb number for index 1 is ${getFibonacciNumberByIndex(1)}`);
console.log(`Fibb number for index 3 is ${getFibonacciNumberByIndex(3)}`);
console.log(`Fibb number for index 6 is ${getFibonacciNumberByIndex(6)}`);

const start = new Date().getTime();

console.log(`Fibb number for index 89 is ${getFibonacciNumberByIndex(89)}`);

const end = new Date().getTime();

const ellapsed = parseFloat((end-start)/1000).toFixed(3);
console.log(`Found in ${ellapsed} sec`);