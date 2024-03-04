import { useState } from 'react'

const AddUser = ({ addUser }) => {
  const [transInfo, setTransfer] = useState({ userName: '' })

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
    addUser(transInfo)
    setTransfer({
      userName: '',
    })
  }

  return (
    <form className="transfer-form">
      <label htmlFor="from">User Name</label>
      <input
        id="from"
        name="userName"
        value={transInfo.userName}
        onChange={handleChange}
      />
      <button
        onClick={(e) => handleTransaction(e)}
        type="submit"
        value="Submit"
      >
        Add User
      </button>
    </form>
  )
}
export default AddUser
