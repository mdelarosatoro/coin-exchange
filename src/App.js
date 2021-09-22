import React from 'react'
import logo from './logo.svg';
import './App.css';
import Coin from './components/Coin/Coin';
import AccountBalance from './components/AccountBalance/AccountBalance';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Coin Exchange</h1>
      </header>
      <div className="App-body">
        <AccountBalance amount={10000} />
        <table className="coin-table">
          <thead>
            <tr>
              <td>Name</td>
              <td>Ticker</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            <Coin name="Bitcoin" ticker="BTC" price={50000} />
            <Coin name="Ethereum" ticker="ETH" price={3600} />
            <Coin name="Tether" ticker="USDT" price={1.0} />
            <Coin name="Ripple" ticker="XRP" price={1.80} />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
