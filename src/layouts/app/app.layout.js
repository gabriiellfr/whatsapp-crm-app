import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { AppHeader, AppFooter, AppSideMenu } from '../../components';

import { Container, ContentWrapper, Main } from './app.styles';

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSidebarMini, setIsSidebarMini] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);
    const toggleSidebarMini = () => setIsSidebarMini(!isSidebarMini);

    return (
        <Container>
            <AppHeader toggleMenu={toggleMenu} />

            <ContentWrapper>
                <AppSideMenu
                    isOpen={isMenuOpen}
                    closeMenu={closeMenu}
                    isMini={isSidebarMini}
                    toggleSidebarMini={toggleSidebarMini}
                />
                <Main>
                    <Outlet />
                </Main>
            </ContentWrapper>

            <AppFooter />
        </Container>
    );
};

export default Layout;
