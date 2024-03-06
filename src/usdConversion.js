const usdCoversion = (val, rate, currency) => {
  let exist = rate.findIndex((e) => e[0] == 'USD')
  exist = rate[exist][1]
  // console.log(exist,rate)
  return exist * Number(val)
}
export default usdCoversion