import React from 'react';

import {
    Title,
    UserAvatar,
    HeaderContainer,
    HamburgerButton,
} from './header.styles';

const AppHeader = ({ toggleMenu }) => {
    return (
        <HeaderContainer>
            <HamburgerButton onClick={toggleMenu}>☰</HamburgerButton>
            <Title>WhatsApp CRM</Title>
            <UserAvatar>
                <img src="https://via.placeholder.com/40" alt="User" />
            </UserAvatar>
        </HeaderContainer>
    );
};

export default AppHeader;
