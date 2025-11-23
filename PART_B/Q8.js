let nums = [10, 3, 7, 20, 13, 2];

let square=nums.map((e)=>e*2)
console.log(square)

    
function isPrime(n){
    if(n<2) return false;
    if(n==2) return true;
    if(n%2==0) return false;
    for(let i=3;i<=Math.sqrt(n);i+=2){
        if(n%i==0) return false
    }
    return true;
}
const prime=nums.filter(isPrime);
console.log(prime);

const sum=nums.reduce((acc,e)=>acc+e,0)
console.log(sum);


const descendingsort=nums.sort((a,b)=>b-a)
console.log(descendingsort);

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

