import React from 'react'
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const Td = styled.td`
    border: 1px solid white;
    width: 120px;
`;

export default function Coin(props) {

    const handleClick = (e) => {
        e.preventDefault();
        props.handleRefresh(props.id);
    }

    return (
        <tr>
        <Td>{props.name}</Td>
        <Td>{props.ticker}</Td>
        <Td>${props.price}</Td>
        {props.showBalance && <Td>{props.balance}</Td>}
        <Td>
            <form action="#" method="POST">
                <button onClick={handleClick}>Refresh</button>
            </form>
        </Td>
    </tr>
    );
}

Coin.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}

