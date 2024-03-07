import { useEffect, useState } from 'react'
import './App.css'
import './IncomeForm.css'
import { toast } from 'react-toastify'
import axios from 'axios'

// eslint-disable-next-line react/prop-types
export default function SendMoney({ fun }) {
  const [rate, setRate] = useState([])
  const [baseCurrency, setCurrency] = useState('BDT')
  useEffect(() => {
    const fetchApi = async () => {
      const res = await axios.get(
        `https://open.er-api.com/v6/latest/${baseCurrency}`
      )
      const newRates = Object.entries(res.data.rates)
      setRate(newRates)
    }
    fetchApi()
  }, [baseCurrency])

  const [transInfo, setTransfer] = useState({
    sender: '',
    reciver: '',
    amount: '',
    currency:''
  })

  function handleChange(e) {
    e.preventDefault()

    const name = e.target.name
    const value = e.target.value

    setTransfer({
      ...transInfo,
      [name]: value,
    })
  }
  const handleTransaction = (e) => {
    e.preventDefault()
    console.log(transInfo)
    if (transInfo.sender && transInfo.reciver && transInfo.amount)
      fun(transInfo,rate)
    else alert('worong')
    setTransfer({
      sender: '',
      reciver: '',
      amount: '',
      currency:''
    })
  }

  return (
    <form className="transfer-form" onSubmit={(e) => handleTransaction(e)}>
      <label htmlFor="from">Sender ID</label>
      <input
        id="from"
        name="sender"
        value={transInfo.sender}
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="to">Receiver ID</label>
      <input
        id="to"
        name="reciver"
        value={transInfo.reciver}
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="amount">Amount</label>
      <input
        type="number"
        id="amount"
        name="amount"
        value={transInfo.amount}
        onChange={handleChange}
        required
      />

      <br />
      <label htmlFor="amount">Currency</label>
      <select
        name="currency"
        value={transInfo.currency}
        onChange={(e) => (handleChange(e), setCurrency(e.target.value))}
      >
        <option />
        {rate.map((item, index) => (
          <option key={index} name="currency" value={item[0]}>
            {item[0]}
          </option>
        ))}
      </select>
      <br />
      <button
        // onClick={(e) => handleTransaction(e)}
        type="submit"
        value="Submit"
      >
        Transfer
      </button>
    </form>
  )
}
