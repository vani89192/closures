// question 1
function createCounter(){
    let count=0;
    function increment(){
        count++;
        console.log("Current count:",count);
    }
    function decrement(){
        count--;
        console.log("current count:",count);
    }
    function display(){
        console.log("current count:",count);
    }
    return{
        increment,
        decrement,
        display
    };
}
const counter=createcounter();
counter.increment();
counter.increment();
counter.decrement();

// question 2
function createBankAccount(){
    let balance=0;
    let transactionHistory=[];

    function deposit(amount){
        balance +=amount;
        transactionHistory.push(`Deposited:$(amount)`);
        console.log(`Deposited;$(amount)`);
    }
    function withdraw(amount){
        if (amount>balance){
            console.log("Insufficient balance");
            transactionHistory.push(`Failed withdrawal:${amount}`);
        }else{
            balance-=amount;
            console.log(`withdrawn:${amount}`);
            transactionHistory.push(`withdrawn:${amount}`);
        }
    }
    function getBalance(){
        console.log("Current balance:",balance);
        return balance;
    }
    function getTransactionHistory(){
        console.log(transactionHistory);
        return transactionHistory;
    }
     return{
        deposit,
        withdraw,
        getBalance,
        getTransactionHistory
     };
}
const account=createBankAccount();
account.deposit(500);
account.withdraw(200);
account.withdraw(400);
account.getBalance();
account.getTransactionHistory();