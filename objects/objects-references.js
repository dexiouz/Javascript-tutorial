let myAccount = {
    name:'Chidera',
    expenses: 0,
    income:0
}
// let otherAccount = myAccount;
// otherAccount.income = 1000000;
let addExpense = function(account,amount){
    // account = {}
    account.expenses +=amount;
    console.log(account)
}
let addIncome=function(account,amount){
    account.income += amount
}
let resetAccount = function(account){
    account.expenses = 0;
    account.income = 0
}
let getAccountSummary = function(account){
    let balance = account.income - account.expenses;
    return `Account for ${account.name} has $${balance}. $${account.income} in income and $${account.expenses} in expenses`

}
addExpense(myAccount,4.2)
addExpense(myAccount, 2.5)
addIncome(myAccount, 3000)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))






