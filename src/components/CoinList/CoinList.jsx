import React from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const CoinTable = styled.table`
    color: white;
`;

export default function CoinList(props) {
    return (
    <CoinTable>
        <thead>
            <tr>
            <td>Name</td>
            <td>Ticker</td>
            <td>Price</td>
            {props.showBalance && <td>Balance</td>}
            <td>Action</td>
            </tr>
        </thead>
        <tbody>
            {props.coinData.map((coin) =>
            <Coin
            key={coin.key}
            id={coin.key}
            name={coin.name}
            ticker={coin.ticker}
            balance={coin.balance}
            price={coin.price}
            handleRefresh={props.handleRefresh}
            showBalance={props.showBalance}
            />)}
        </tbody>
    </CoinTable>
    )

}
