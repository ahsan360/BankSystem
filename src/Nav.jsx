import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to={'/addincome'}>Add Income</Link>
        </li>
        <li>
          <Link to={'/transfermoney'}>Transfer Money</Link>
        </li>
        <li>
          <Link to={'/adduser'}>Add User</Link>
        </li>
        <li>
          <Link to={'/details'}>Show User Details</Link>
        </li>
        <li>
          <Link to={'/userlist'}>User List</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
