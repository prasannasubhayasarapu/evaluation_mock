
function sumAll(...n){
   
    return n.reduce((total,n)=>total+n,0)
}
console.log(sumAll(1, 2, 3, 4)) // should return 10
