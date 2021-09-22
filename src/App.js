import React from 'react'
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinList from './components/CoinList/CoinList';
import Header from './components/Header/Header';
import styled from 'styled-components';

const AppRoot = styled.div`
  text-align: center;
`;

const AppBody = styled.div`
  background-color: darkcyan;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

class App extends React.Component {
  state = {
    balance: 10000,
    showBalance: false,
    coinData: [
      {
        name: "Bitcoin",
        ticker: "BTC",
        balance: 3.2,
        price: 47000
      },
      {
        name: "Ethereum",
        ticker: "ETH",
        balance: 32.0,
        price: 3200
      },
      {
        name: "Tether",
        ticker: "USDT",
        balance: 0,
        price: 1
      },
      {
        name: "Ripple",
        ticker: "XRP",
        balance: 2300,
        price: 1.8
      },
      {
        name: "Drip Network",
        ticker: "DRIP",
        balance: 407.23,
        price: 8
      }
    ]
  }

  handleRefresh = (valueChangeTicker) => {
    const newCoinData = this.state.coinData.map((values) => {
      let newValues = {...values};
      if(valueChangeTicker === values.ticker) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newValues.price *= randomPercentage;
      }
      return newValues;
    });

    this.setState({ coinData: newCoinData });
  }

  toggleBalance = () => {
    this.setState({ showBalance: !this.state.showBalance })
  }

  render () {
    return (
    <AppRoot>
      <Header />
      <AppBody>
        <AccountBalance
          amount={this.state.balance}
          toggleBalance={this.toggleBalance}
          showBalance={this.state.showBalance} />
        <CoinList
          coinData={this.state.coinData}
          handleRefresh={this.handleRefresh}
          showBalance={this.state.showBalance} />
      </AppBody>
    </AppRoot>
    );
  }

}

export default App;
