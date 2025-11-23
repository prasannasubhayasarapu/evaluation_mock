function createWallet(){
    let balance=0;
    return{
        addMoney:function (amount){
            if(amount>0){
                balance+=amount
                console.log(`Added $${amount}. New money :${balance}`);
            }
            else{
                console.log("Add some Amount");   
            } 
        },
        checkBalance: function(){
            console.log(`Current balance: $${balance}`);
            return balance
        }
    }
}
let myWallet = createWallet();
myWallet.addMoney(500);
myWallet.addMoney(200);
myWallet.checkBalance();  // should show 700

