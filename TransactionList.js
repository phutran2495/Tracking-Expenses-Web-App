const { v4 } = require('uuid');

let transactions = [ {id:"12",text:'running',amount:122} , {id:"11",text:'running',amount:122}]

const addTransaction = (transaction) =>{
    const id = v4();
    console.log(transaction)
    const text = transaction.text;
    const amount = transaction.amount;
    const newTransaction = {id, text, amount}
    transactions.push(newTransaction)
}

const removeTransaction = (id) =>{
  transactions = transactions.filter((transaction)=> transaction.id !== id ) 
  
  console.log("this transactions is in remove transaction function")
  console.log(transactions)
}

const clearTransactions = () =>{
  transactions=[]
}

module.exports = {transactions,addTransaction,removeTransaction,clearTransactions}