// App.js
import { useEffect, useState } from 'react'
import Axios from 'axios'
import './App.css'
import Card from './Card'
import check from './Check'
import Navbar from './Nav'
import IncomeForm from './AddIncome'
import SendMoney from './SendMoney'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import addIncome from './addIncom'
import AddUser from './AddUser'
import UserDetails from './UserDetails'
import UserTable from './UserTable'
function App() {
  const notify = () => toast('Wow so easy!')

  let cur = JSON.parse(localStorage.getItem('Data'))
  const [users,setUser] = useState(cur)
  //======================= Transection ===============================================
  const transection = (transInfo) => {
    const c = check(cur, transInfo)
    if (c) {
      const nwc = [...c]
      const UpdatedData = [...nwc]
      localStorage.removeItem('Data')
      const Data = JSON.stringify(UpdatedData)
      localStorage.setItem('Data', Data)
      alert('Money Successlly Transfer')
      cur = JSON.parse(localStorage.getItem('Data'))
      setUser(cur)
    }
  }

  //  const Data = JSON.stringify(users)
  //  localStorage.setItem('Data', Data)
  // console.log(JSON.parse(localStorage.getItem('Data')))
  //======================= AddUser ===============================================
  const addUser = (formData) => {
    let uniqId
    if (cur === null) {
      uniqId = 0
      cur = []
    } else uniqId = cur.length

    const nwUser = {
      id: uniqId,
      name: formData.userName,
      balance: 0,
      transection: [],
    }
    const addUserArray = [...cur]
    addUserArray.push(nwUser)
    cur = []
    alert(`Acount Created successfully ' + Your ID IS =  ${uniqId}`)
    const UpdatedData = [...addUserArray]
    localStorage.removeItem('Data')
    const Data = JSON.stringify(UpdatedData)
    localStorage.setItem('Data', Data)
    cur = JSON.parse(localStorage.getItem('Data'))
    setUser(cur)
    // console.log(cur)
  }

  //======================= AddIncome ===============================================
  const addIncomeTriger = (formData,rate) => {
    const c = addIncome(cur, formData,rate)
    if (c) {
      const nwc = [...c]
      const UpdatedData = [...nwc]
      localStorage.removeItem('Data')
      const Data = JSON.stringify(UpdatedData)
      localStorage.setItem('Data', Data)
      cur = JSON.parse(localStorage.getItem('Data'))
      alert('Balance Added')
      setUser(cur)
    }
  }
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="adincom">
          <div id="addIncome" style={{ display: 'flex' }}>
            <IncomeForm addIncomeTriger={addIncomeTriger} />
            <SendMoney fun={transection} />
            <AddUser addUser={addUser} />
          </div>
        </div>

        <div id="user" className="UserDetails">
          <UserDetails users={cur} />
        </div>
        <div id ="flex"className="flex">
          <div id="" className="users">
            <UserTable users= {users}/>
            {/* <h1>User</h1>
            {users
              ? users.map((user) => (
                  <Card
                    key={user.id}
                    id={user.id}
                    userName={user.name}
                    balance={user.balance}
                    transactions={user.transection}
                  />
                ))
              : null} */}
          </div>
          <div className="transfer"></div>
        </div>
      </div>
    </>
  )
}

export default App
