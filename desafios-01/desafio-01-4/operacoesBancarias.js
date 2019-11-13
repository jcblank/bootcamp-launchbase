const user = {
  name: 'Mariana',
  transactions: [],
  balance: 0
}

function createTransaction({type, value}) {
  user.transactions.push({type, value})
  
  if (type === 'credit') {
    user.balance += value
  } else if (type === 'debit') {
    user.balance -= value
  }
}

// function getHigherTransactionByType(typeOf) {
//   for (let i of user.transactions) {
//     if (i.type === typeOf) {
      
//     }
//   }
// }

function getAverageTransactionValue() {
  const divider = user.transactions.length
  let accumulator = 0

  for (let i of user.transactions) {
    accumulator += i.value
  }

  console.log(accumulator / divider)
}

function getTransactionsCount() {
  let credit = []
  let debit = []

  for (let i of user.transactions) {
    if (i.type === 'credit') {
      credit.push(i)
    } else if (i.type === 'debit') {
      debit.push(i)
    }
  }

  console.log({ credit: credit.length, debit: debit.length })
}

createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

console.log(user.balance)

getAverageTransactionValue()

getTransactionsCount()
