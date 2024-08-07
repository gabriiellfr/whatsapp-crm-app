import React from 'react';
import {
    FaHome,
    FaComments,
    FaReply,
    FaFileImport,
    FaCog,
} from 'react-icons/fa';

import {
    CloseButton,
    Menu,
    MenuItem,
    MiniButton,
    Nav,
} from './side-menu.styles';
import { IoMdClose } from 'react-icons/io';

const AppSideMenu = ({ isOpen, closeMenu, isMini, toggleSidebarMini }) => (
    <Nav isOpen={isOpen} isMini={isMini}>
        <CloseButton onClick={closeMenu}>
            <IoMdClose />
        </CloseButton>
        <MiniButton onClick={toggleSidebarMini} isMini={isMini}>
            <FaCog />
        </MiniButton>
        <Menu>
            <MenuItem href="#" active={window.location.hash === '#home'}>
                <FaHome />
                {!isMini && <span>Home</span>}
            </MenuItem>
            <MenuItem href="#" active={window.location.hash === '#chats'}>
                <FaComments />
                {!isMini && <span>Chats</span>}
            </MenuItem>
            <MenuItem href="#" active={window.location.hash === '#auto-reply'}>
                <FaReply />
                {!isMini && <span>Auto-Reply</span>}
            </MenuItem>
            <MenuItem href="#" active={window.location.hash === '#data-load'}>
                <FaFileImport />
                {!isMini && <span>Data Load</span>}
            </MenuItem>
            <MenuItem href="#" active={window.location.hash === '#config'}>
                <FaCog />
                {!isMini && <span>Config</span>}
            </MenuItem>
        </Menu>
    </Nav>
);

export default AppSideMenu;
