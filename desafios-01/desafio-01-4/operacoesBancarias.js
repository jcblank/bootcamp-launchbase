const user = {
  name: 'Mariana',
  transactions: [],
  balance: 0
}

function createTransaction(transactions) {
  user.transactions.push(transactions)
  
  if (transactions.type === 'credit') {
    user.balance += transactions.value
  } else if (transactions.type === 'debit') {
    user.balance -= transactions.value
  }
}

function getHigherTransactionByType(type) {
  let accumulator = 0
  let higherTransaction = undefined

  for (let i of user.transactions) {
    if (i.type === type) {
      if (i.value > accumulator) {
        accumulator = i.value
        higherTransaction = i
      }
    }
  }
  
  console.log(higherTransaction)
}

function getAverageTransactionValue() {
  const divider = user.transactions.length
  let accumulator = 0

  for (let i of user.transactions) {
    accumulator += i.value
  }

  const average = accumulator / divider

  console.log(average)
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

  const transactions = {
    credit: credit.length,
    debit: debit.length
  }

  console.log(transactions)
}

createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

console.log(user.balance)

getHigherTransactionByType('credit')
getHigherTransactionByType('debit')

getAverageTransactionValue()

getTransactionsCount()
