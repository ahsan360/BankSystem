import { useState } from 'react'
import Card from './Card'

const UserDetails = ({ users }) => {
  const [transInfo, setTransfer] = useState({
    id: '',
    userName: '',
  })

  const [details, setDetails] = useState({})
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
    const existId = users.findIndex((item) => item.id == transInfo.id)
    const existName = users.findIndex((item) => item.name == transInfo.userName)
    // console.log(transInfo)
    if (existId == -1 || existName == -1) alert('User Not Found')
    else {
      setDetails(users[existId])
    }

    setTransfer({
      id: '',
      userName: '',
    })
  }
  //   console.log(details.id)
  //   console.log(details.name)
  //   console.log(details.balance)
  //   console.log(details.transection)
  // d: 0, name: 'Tanz', balance: 102, transection: Array(2)

  return (
    <>
      <form className="transfer-form">
        <label htmlFor="from">Acount No</label>
        <input name="id" value={transInfo.id} onChange={handleChange} />
        User Name
        <input
          name="userName"
          value={transInfo.userName}
          onChange={handleChange}
        />
        <button
          onClick={(e) => handleTransaction(e)}
          type="submit"
          value="Submit"
        >
          Search
        </button>
      </form>
      <div className="Details">
        {/* {console.log(details)} */}
        {JSON.stringify(details) !== '{}' ? (
          <Card
            key={details.id}
            id={details.id}
            userName={details.name}
            balance={details.balance}
            transactions={details.transection}
          />
        ) : (
          <div></div>
        )}
      </div>
    </>
  )
}
export default UserDetails
