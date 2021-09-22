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
                </tr>
            </thead>
            <tbody>
                {this.props.coinData.map(({name, ticker, price}) =>
                <Coin
                key={ticker}
                name={name}
                ticker={ticker}
                price={price}
                handleRefresh={this.props.handleRefresh}
                />)}
            </tbody>
        </CoinTable>
        )
    }
}
