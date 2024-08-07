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
    <Nav $isOpen={isOpen} $isMini={isMini}>
        <CloseButton onClick={closeMenu}>
            <IoMdClose />
        </CloseButton>
        <MiniButton onClick={toggleSidebarMini} $isMini={isMini}>
            <FaCog />
        </MiniButton>
        <Menu>
            <MenuItem
                to="/"
                $active={window.location.hash === ''}
                $isMini={isMini}
            >
                <FaHome />
                {!isMini && <span>Home</span>}
            </MenuItem>
            <MenuItem
                to="/chats"
                $active={window.location.hash === '#chats'}
                $isMini={isMini}
            >
                <FaComments />
                {!isMini && <span>Chats</span>}
            </MenuItem>
            <MenuItem
                to="#"
                $active={window.location.hash === '#auto-reply'}
                $isMini={isMini}
            >
                <FaReply />
                {!isMini && <span>Auto-Reply</span>}
            </MenuItem>
            <MenuItem
                to="#"
                $active={window.location.hash === '#data-load'}
                $isMini={isMini}
            >
                <FaFileImport />
                {!isMini && <span>Data Load</span>}
            </MenuItem>
            <MenuItem
                to="#"
                $active={window.location.hash === '#config'}
                $isMini={isMini}
            >
                <FaCog />
                {!isMini && <span>Config</span>}
            </MenuItem>
        </Menu>
    </Nav>
);

export default AppSideMenu;
