import axios from 'axios'
import { useEffect, useState } from 'react'

const Converter = ({ converterTrigger }) => {
  const [baseCurrency, setCurrency] = useState('BDT')
  const [rate, setRate] = useState([])
  const [cur, setCur] = useState('')

  const fetchApi = async () => {
    const res = await axios.get(
      `https://open.er-api.com/v6/latest/${baseCurrency}`
    )
    const newRates = Object.entries(res.data.rates)
    setRate(newRates)
  }

  useEffect(() => {
    fetchApi()
    // console.log('runnig')
  }, [baseCurrency])

  const handleChange = (e) => {
    e.preventDefault()
    let str = e.target.value
    str = str[0] + str[1] + str[2]
    setCur(str)
    setCurrency(str)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    converterTrigger(rate, baseCurrency)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <select value={cur} name="currency" onChange={(e) => handleChange(e)}>
          <option value="" />
          {rate.map((item, index) => (
            <option key={index} value={item[0]}>
              {item[0]}
            </option>
          ))}
        </select>
        <br />
        <br />
        <button type="submit">Convert</button>
      </form>
    </>
  )
}

export default Converter
