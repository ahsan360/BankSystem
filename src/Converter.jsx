import axios from 'axios'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

const Converter = ({ converterTriger }) => {
  const [baseCurrency, setCurrency] = useState('BDT')
  const [rate, setRate] = useState([])
  const [seleVal, setSelVal] = useState('')
  const fecthApi = async () => {
    const apis = await axios.get(
      `https://open.er-api.com/v6/latest/${baseCurrency}`
    )
    const nwDta = Object.entries(apis.data.rates)
    setRate(nwDta)
  }
  useEffect(() => {
    fecthApi()
  }, [seleVal])
  function handleChange(e) {
    e.preventDefault()
    let cur = e.target.value
    cur = cur[0] + cur[1] + cur[2]
    setCurrency(cur)
    setSelVal(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
   converterTriger(rate, baseCurrency)
  }
  return (
    <>
      <form>
        <select
          value={seleVal}
          name="Country"
          onChange={handleChange}
        >
          <option />
          {rate.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <br />
        <br />
        <button onClick={(e) => handleSubmit(e)} type="submit" value="Submit">
          Convert
        </button>
      </form>
    </>
  )
}
export default Converter
