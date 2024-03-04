import App from './App'
const check = (arr, transInfo) => {
  const { sender, reciver, amount } = transInfo
  const existSend = arr.findIndex((item) => item.id == sender)
  const existRec = arr.findIndex((item) => item.id == reciver)
  console.log(existRec,existSend)
  console.log(sender,reciver)
  if (existSend === -1 || existRec == -1) {
    alert('Not Found')
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
      debit: 'Creadited',
      amount: amount,
      SendTo: `${reciver}`,
    })
    newArr[existRec].transection.push({
      date: `${currentDate} ${hour} `,
      debit: 'Debited',
      amount: amount,
      SendTo: `${sender}`,
    })
    return newArr
  }
}

export default check
