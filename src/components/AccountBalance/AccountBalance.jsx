import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    border: 3px solid black;
    padding: 1rem;
    margin-bottom: 1.8rem;
    border-radius: 6px;
    background-color: rgba(0,0,0,0.2);
    box-shadow: 1px 1px 1px 0.8px;
`;

export default class AccountBalance extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.toggleBalance();
    }

    render() {
        const buttonText = this.props.showBalance ? 'Hide Balance' : 'Show Balance';

        return (
            <Section className="account-balance">
                {this.props.showBalance && <p>Account Balance: <span>${this.props.amount}</span></p>}
                <button onClick={this.handleClick}>{buttonText}</button>
            </Section>
        );
    }
}


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired,
}

