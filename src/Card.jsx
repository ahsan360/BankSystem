import React, { useState } from 'react'
import './Card.css' // Import the CSS file for styling
import Converter from './Converter'
import converterFunc from './converterFun'
// eslint-disable-next-line react/prop-types
const Card = ({ id, userName, balance, transactions }) => {
  const [nwBalance, setBalance] = useState({
    bal: '',
    cntryname: '',
  })
  const converterTriger = (rates, cntryName) => {
    const convertedCurrency = converterFunc(rates, balance)

    setBalance({
      bal: convertedCurrency,
      name: cntryName,
    })
  }
  return (
    <div className="card">
      <div className="card-header">
        <h3>Card Information</h3>
      </div>
      <div className="card-body">
        <div className="info-row">
          <span className="label">A/C No</span>
          <span className="value">{id}</span>
        </div>
        <div className="info-row">
          <span className="label">User Name</span>
          <span className="value">{userName}</span>
        </div>
        <div className="">
          <h2>
            <span className="label">{"Balance "}</span>
            <span className="value">${balance}</span>
          </h2>
          <Converter converterTriger={converterTriger} />
          <br />
          <div>{nwBalance.bal} </div>
          <br />
          <p>{nwBalance.name}</p>
        </div>

        <div className="info-row">
          <div className="tbl">
            <h2 className="label">All Transactions</h2>

            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>A/C</th>
                  <th>Debit</th>
                  <th>Credit</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td>{transaction.date}</td>
                    <td>
                      {transaction.SendTo ? transaction.SendTo : 'Diposited'}
                    </td>
                    <td>{transaction.debit ? transaction.debit : ''}</td>
                    <td>{transaction.credit ? transaction.credit : ''}</td>
                    <td>{transaction.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
