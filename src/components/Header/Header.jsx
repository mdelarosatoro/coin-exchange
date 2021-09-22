import React, { Component } from 'react'
import logo from '../../logo.svg';
import styled, { keyframes } from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #282c34;
    height: 20vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.5rem;
    color: white;
`;

const rotationAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const AppLogo = styled.img`
    height: 6rem;
    pointer-events: none;
    animation: ${rotationAnimation} infinite 20s linear;
`;


export default class Header extends Component {
    render() {
        return (
            <HeaderContainer>
                <AppLogo src={logo} alt="logo" />
                <h1>Coin Exchange</h1>
            </HeaderContainer>
        )
    }
}
