import App from './App'
const check = (arr, transInfo) => {
  const { sender, reciver, amount } = transInfo
  const existSend = arr.findIndex((item) => item.id == sender)
  const existRec = arr.findIndex((item) => item.id == reciver)
  console.log(existRec, existSend)
  console.log(sender, reciver)
  if (
    existRec == existSend ||
    existSend === -1 ||
    existRec == -1 ||
    amount <= 0
  ) {
    alert('Wrong Submission')
    return 0
  } else if (arr[existSend].balance < amount) {
    alert('Do not have Sufficient Balance')
    return 0
  } else {
    let newArr = [...arr]
    newArr[existSend].balance -= Number(amount)
    newArr[existRec].balance += Number(amount)
    const today = new Date()
    const month = today.getMonth() + 1
    const year = today.getFullYear()
    const date = today.getDate()
    const hour = String(today.getHours()) + ':' + today.getMinutes()
    const currentDate = month + '/' + date + '/' + year

    newArr[existSend].transection.push({
      date: `${currentDate} ${hour} `,
      debit: '',
      amount: amount,
      credit: 'Creadited',
      SendTo: `${reciver}`,
      currency: 'USD',
    })
    newArr[existRec].transection.push({
      date: `${currentDate} ${hour} `,
      debit: 'Debited',
      amount: amount,
      credit: '',
      SendTo: `${sender}`,
      currency: 'USD',
    })
    return newArr
  }
}

export default check
