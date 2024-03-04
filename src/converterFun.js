const converterFunc = (rates,bal) =>{
//  console.log(rates[0])
  let exist = rates.findIndex((e) => e[0] == 'USD')
  exist = rates[exist][1]
  const res = 1 / Number(exist)
 
  return res * Number(bal)
}
export default converterFunc