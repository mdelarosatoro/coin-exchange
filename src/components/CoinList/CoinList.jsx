import React, { Component } from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const CoinTable = styled.table`
    color: white;
`;

export default class CoinList extends Component {
    render() {
        return (
        <CoinTable>
            <thead>
                <tr>
                <td>Name</td>
                <td>Ticker</td>
                <td>Price</td>
                {this.props.showBalance && <td>Balance</td>}
                <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {this.props.coinData.map(({name, ticker, price, balance}) =>
                <Coin
                key={ticker}
                name={name}
                ticker={ticker}
                balance={balance}
                price={price}
                handleRefresh={this.props.handleRefresh}
                showBalance={this.props.showBalance}
                />)}
            </tbody>
        </CoinTable>
        )
    }
}
