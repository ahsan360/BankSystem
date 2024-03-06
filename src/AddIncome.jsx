import React, { useEffect, useState } from 'react'
import './IncomeForm.css'
import axios from 'axios'

const IncomeForm = ({ addIncomeTriger }) => {
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
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    amount: '',
    currency: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    // console.log(e.target.value)
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log('rate', rate)
    addIncomeTriger(formData, rate)
    setFormData({
      id: '',
      name: '',
      amount: '',
      currency: '',
    })
  }
  // console.log(baseCurrency)
  return (
    <form className="income-form" onSubmit={handleSubmit}>
      Add Money
      <label htmlFor="id">ID</label>
      <input
        type="text"
        id="id"
        name="id"
        value={formData.id}
        onChange={handleChange}
        required
      />

      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="amount">Amount</label>
      <input
        type="number"
        id="amount"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        required
      />

      <label htmlFor="amount">Currency</label>
      <select
        name="currency"
        value={formData.currency}
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
      <button type="submit">Add Income</button>
    </form>
  )
}

export default IncomeForm
