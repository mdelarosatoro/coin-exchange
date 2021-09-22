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
  constructor(props) {
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        {
          name: "Bitcoin",
          ticker: "BTC",
          price: 47000
        },
        {
          name: "Ethereum",
          ticker: "ETH",
          price: 3200
        },
        {
          name: "Tether",
          ticker: "USDT",
          price: 1
        },
        {
          name: "Ripple",
          ticker: "XRP",
          price: 1.8
        },
        {
          name: "Drip Network",
          ticker: "DRIP",
          price: 8
        }
      ]
    }
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleRefresh(valueChangeTicker) {
    const newCoinData = this.state.coinData.map(({name, ticker, price}) => {
      let newPrice = price;
      if(valueChangeTicker === ticker) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newPrice = newPrice * randomPercentage;
      }
      return {
        name,
        ticker,
        price: newPrice
      };
    });

    this.setState({ coinData: newCoinData });
  }

  render () {
    return (
    <AppRoot>
      <Header />
      <AppBody>
        <AccountBalance amount={this.state.balance} />
        <CoinList coinData={this.state.coinData} handleRefresh={this.handleRefresh} />
      </AppBody>
    </AppRoot>
    );
  }

}

export default App;
