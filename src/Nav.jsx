import React from 'react'
import './App.css' 
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#addIncome">Add Income</a>
        </li>
        <li>
          <a href="#transferMoney">Transfer Money</a>
        </li>
        <li>
          <a href="#addUser">Add User</a>
        </li>
        <li>
          <a href="#user">Show User Details</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
