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
function App() {
  const notify = () => toast('Wow so easy!')
  let [users, setUsers] = useState([
    {
      id: 0,
      name: 'Tanz',
      balance: 100,
      transection: [],
    },
    {
      id: 1,
      name: 'Honey',
      balance: 150,
      transection: [],
    },
    {
      id: 2,
      name: 'Mush',
      balance: 10000,
      transection: [],
    },
  ])

  const [DataBase, setData] = useState({ data: users })
  const transection = (transInfo) => {
    setUsers((prevUsers) => {
      const cur = check(prevUsers, transInfo)
      if (cur === 0) {
        return prevUsers
      }
      return cur
    })
  }
  const addUser = (formData) => {
    const uniqId = users.length

    const nwUser = {
      id: uniqId,
      name: formData.userName,
      balance: 0,
      transection: [],
    }
    const addUserArray = [...users, nwUser]
    setUsers(addUserArray)
    alert('Acount Created successfully')
  }
  const addIncomeTriger = (formData) => {
    setUsers((prevUsers) => {
      const cur = addIncome(prevUsers, formData)
      if (cur === 0) {
        return prevUsers
      }
      return cur
    })
  }

  // const sett = JSON.stringify(obj);
  // localStorage.setItem('obj',sett)
  // const get = JSON.parse(localStorage.getItem('obj'))
  // console.log(get)
  return (
    <>
      <div className="App">
        <Navbar />
        <div id="addIncome" style={{ display: 'flex' }}>
          <IncomeForm addIncomeTriger={addIncomeTriger} />
          <SendMoney fun={transection} />
          <AddUser addUser={addUser} />
        </div>
        <div className="flex">
          <div id="user" className="users">
            <h1>User</h1>
            {users.map((user) => (
              <Card
                key={user.id}
                id={user.id}
                userName={user.name}
                balance={user.balance}
                transactions={user.transection}
              />
            ))}
          </div>
          <div className="transfer"></div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
