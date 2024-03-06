import { useState } from 'react'

const AddUser = ({ addUser }) => {
  const [transInfo, setTransfer] = useState({ userName: '' })
  function hasNumber(str) {
    return /[0-9]/.test(str)
  }
  function hasStr(str) {
    return /[a-z || A-Z]/.test(str)
  }
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
    // console.log(transInfo)
    if (
      transInfo.userName != '' &&
      !hasNumber(transInfo.userName) &&
      hasStr(transInfo.userName)
    )
      addUser(transInfo)
    else alert('Empty Info')
    setTransfer({
      userName: '',
    })
  }
console.log('hello')
  return (
    <form className="transfer-form" onSubmit={(e) => handleTransaction(e)}>
      <label htmlFor="from">User Name</label>
      <input
        type="text"
        id="from"
        name="userName"
        value={transInfo.userName}
        onChange={handleChange}
        required
      />
      <button type="submit" value="Submit">
        Add User
      </button>
    </form>
  )
}
export default AddUser
