import React, { useEffect } from 'react'
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinList from './components/CoinList/CoinList';
import Header from './components/Header/Header';
import styled from 'styled-components';
import axios from 'axios';

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

const COIN_AMOUNT = 5;
const formatPrice = price => parseFloat(price.toFixed(4));

function App(props) {

  const [balance, setBalance] = React.useState(10000);
  const [showBalance, setShowBalance] = React.useState(false);
  const [coinData, setCoinData] = React.useState([]);

  useEffect( () => {
    if (coinData.length === 0) {
      componentDidMount();
    }
  });

  const componentDidMount = async () => {
    //componentDidMount
    const response = await axios.get('https://api.coinpaprika.com/v1/coins');
    const idList = response.data.slice(0, COIN_AMOUNT).map(coin => coin.id);
    const result = await Promise.all(idList.map(coin => axios.get(`https://api.coinpaprika.com/v1/tickers/${coin}`)));
    const coinData = result.map(coin => (
        {
          key: coin.data.id,
          name: coin.data.name,
          ticker: coin.data.symbol,
          balance: 0,
          price: formatPrice(coin.data.quotes.USD.price)
        }
      ));
    setCoinData(coinData)
  }

  const handleRefresh = async (valueChangeId) => {
    const response = await axios.get(`https://api.coinpaprika.com/v1/tickers/${valueChangeId}`);
    const newCoinData = coinData.map(coin => {
      const newValues = {...coin};

      if (valueChangeId === coin.key) {
        newValues.price = formatPrice(response.data.quotes.USD.price);
        console.log(newValues.price);
      }

      return newValues;
    });

    setCoinData(newCoinData);
  }

  const toggleBalance = () => {
    setShowBalance(oldValue => !oldValue);
  }

  return (
  <AppRoot>
    <Header />
    <AppBody>
      <AccountBalance
        amount={balance}
        toggleBalance={toggleBalance}
        showBalance={showBalance} />
      <CoinList
        coinData={coinData}
        handleRefresh={handleRefresh}
        showBalance={showBalance} />
    </AppBody>
  </AppRoot>
  );

}

export default App;
