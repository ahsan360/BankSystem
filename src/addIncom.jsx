import usdCoversion from './usdConversion'
const addIncome = (users, formData, rate) => {
  // console.log(formData)
  const { id, name, amount, currency } = formData
  const exist = users.findIndex((e) => e.id == id)

  if (exist >= 0 && users[exist].name == name && amount > 0) {
    const usdAmount = usdCoversion(amount, rate, currency)
    // console.log('usd',usdAmount)
    const nwUser = [...users]
    nwUser[exist].balance += Number(usdAmount)
    const today = new Date()
    const month = today.getMonth() + 1
    const year = today.getFullYear()
    const date = today.getDate()
    const hour = String(today.getHours()) + ':' + today.getMinutes()
    const currentDate = month + '/' + date + '/' + year
    const histry = {
      date: `${currentDate} ${hour} `,
      debit: 'Debited',
      amount: amount,
      SendTo: '',
      currency: currency,
    }
    console.log(histry)
    nwUser[exist].transection.push(histry)
    //  nwUser[exist].transection.splice(0, cur.length, ...cur)

    return nwUser
  }
  alert('information was erong')
  return 0
}
export default addIncome
