import { useState } from 'react'
import './App.css'
import './IncomeForm.css'
import { toast } from 'react-toastify'

// eslint-disable-next-line react/prop-types
export default function SendMoney({ fun }) {
  const [transInfo, setTransfer] = useState({
    sender: '',
    reciver: '',
    amount: '',
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
    fun(transInfo)
    setTransfer({
      sender: '',
      reciver: '',
      amount: '',
    })
  }

  return (
    <form className="transfer-form">
      <label htmlFor="from">Sender ID</label>
      <input
        id="from"
        name="sender"
        value={transInfo.sender}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="to">Receiver ID</label>
      <input
        id="to"
        name="reciver"
        value={transInfo.reciver}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="amount">Amount</label>
      <input
        id="amount"
        name="amount"
        value={transInfo.amount}
        onChange={handleChange}
      />
      <br />
      <button
        onClick={(e) => handleTransaction(e)}
        type="submit"
        value="Submit"
      >
        Transfer
      </button>
    </form>
  )
}
