import React from 'react'
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

// function Coin({ name, ticker, price }) {
//     return (
//         <tr className="coin-row">
//             <td>{name}</td>
//             <td>{ticker}</td>
//             <td>${price}</td>
//         </tr>
//     )
// }


const Td = styled.td`
    border: 1px solid white;
    width: 120px;
`;

export default class Coin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            price: this.props.price,
        }
        this.handleClick = this.handleClick.bind(this);
    }


    // componentDidMount() {
    //     const callback = () => {
    //         //set the state to a new random value
    //         const randomPercentage = 0.995 + Math.random() * 0.01;
    //         this.setState(oldState => {
    //             return { price: Math.floor((oldState.price * randomPercentage) * 100) / 100 }
    //         })
    //     }
    //     setInterval(callback, 1000);
    // }

    handleClick(e) {
        e.preventDefault();
        const randomPercentage = 0.995 + Math.random() * 0.01;
        this.setState(oldState => {
            return { price: Math.floor((oldState.price * randomPercentage) * 100) / 100 }
        })
    }
                
    render(){
        return (
            <tr>
            <Td>{this.props.name}</Td>
            <Td>{this.props.ticker}</Td>
            <Td>${this.state.price}</Td>
            <Td>
                <form action="#" method="POST">
                    <button onClick={this.handleClick}>Refresh</button>
                </form>
            </Td>
        </tr>
        );
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}

