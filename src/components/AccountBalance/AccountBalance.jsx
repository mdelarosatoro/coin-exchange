import React from 'react';
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

export default function AccountBalance(props) {
    const handleClick = (e) => {
        e.preventDefault();
        props.toggleBalance();
    }
    const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';

    return (
        <Section className="account-balance">
            {props.showBalance && <p>Account Balance: <span>${props.amount}</span></p>}
            <button onClick={handleClick}>{buttonText}</button>
        </Section>
    );
}


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired,
}

