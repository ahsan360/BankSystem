const addIncome = (users, formData) => {
  const { id, name, amount } = formData
  const exist = users.findIndex((e) => e.id == id)
  
  if (exist >= 0 && users[exist].name == name && amount > 0) {
    const nwUser = [...users]
    nwUser[exist].balance+=Number(amount);
     const today = new Date()
     const month = today.getMonth() + 1
     const year = today.getFullYear()
     const date = today.getDate()
     const hour = String(today.getHours()) + ':' + today.getMinutes()
     const currentDate = month + '/' + date + '/' + year
     const histry = {
       date: `${currentDate} ${hour} `,
       debit:'Debited',
       amount: amount,
       SendTo :''
     }  
     nwUser[exist].transection.push(histry)
     console.log(nwUser[exist])
    //  nwUser[exist].transection.splice(0, cur.length, ...cur)
    
  alert('Balance Added')
    return nwUser
  }
  alert('information was erong')
  return 0
}
export default addIncome
