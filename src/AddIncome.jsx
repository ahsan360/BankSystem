import React, { useState } from 'react'
import './IncomeForm.css'

const IncomeForm = ({ addIncomeTriger }) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    amount: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addIncomeTriger(formData)
    setFormData({
      id: '',
      name: '',
      amount: '',
    })
  }

  return (
    <form className="income-form" onSubmit={handleSubmit}>
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
        id="amount"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        required
      />

      <button type="submit">Add Income</button>
    </form>
  )
}

export default IncomeForm
