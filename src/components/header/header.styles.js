import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #4a90e2;
    color: #333;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const HamburgerButton = styled.button`
    display: block;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #fff;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const Title = styled.h1`
    flex: 1;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
`;

export const UserAvatar = styled.div`
    margin-right: 0.5rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`;
