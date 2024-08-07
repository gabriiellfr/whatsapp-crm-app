import styled from 'styled-components';

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: ${(props) => (props.isMini ? '4rem' : '16rem')};
    background-color: #fff;
    border-right: 1px solid #ddd;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, width 0.3s;

    ${(props) =>
        props.isOpen
            ? 'transform: translateX(0);'
            : 'transform: translateX(-100%);'}

    @media (min-width: 768px) {
        position: static;
        transform: none;
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #333;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const MiniButton = styled.button`
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #333;
    transform: ${(props) => (props.isMini ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: transform 0.3s;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
`;

export const MenuItem = styled.a`
    display: flex;
    align-items: center;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.active ? '#4a90e2' : '#333')};
    background-color: ${(props) => (props.active ? '#e6f7ff' : 'transparent')};
    border-radius: 0.25rem;
    transition: background-color 0.2s, color 0.2s;

    text-decoration: none;

    &:hover {
        background-color: #e6f7ff;
        color: #4a90e2;
    }

    svg {
        margin-right: ${(props) => (props.isMini ? '0' : '0.5rem')};
        font-size: 1.5rem;
    }

    span {
        display: ${(props) => (props.isMini ? 'none' : 'block')};
    }
`;
