import React from 'react'
import "./Coin.css"
import { PropTypes } from 'prop-types';

// function Coin({ name, ticker, price }) {
//     return (
//         <tr className="coin-row">
//             <td>{name}</td>
//             <td>{ticker}</td>
//             <td>${price}</td>
//         </tr>
//     )
// }

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
            <tr className="coin-row">
            <td>{this.props.name}</td>
            <td>{this.props.ticker}</td>
            <td>${this.state.price}</td>
            <td>
                <form action="#" method="POST">
                    <button onClick={this.handleClick}>Refresh</button>
                </form>
            </td>
        </tr>
        );
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}

