import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Nav.jsx'
import { BrowserRouter } from 'react-router-dom'

import { Link, Route, Routes } from 'react-router-dom'
// import Converter from './Converter.jsx'

import { QueryClient, QueryClientProvider } from 'react-query'
import SendMoney from './SendMoney.jsx'
import AddUser from './AddUser.jsx'
import IncomeForm from './AddIncome.jsx'
import UserDetails from './UserDetails.jsx'
import UserTable from './UserTable.jsx'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
   
    <QueryClientProvider client={queryClient}>
      <App/>
    </QueryClientProvider> 
)
