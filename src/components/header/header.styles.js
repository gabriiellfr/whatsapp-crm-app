import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${(props) => props.theme.border};

    color: ${(props) => props.theme.color};
    padding-top: ${(props) => props.theme.paddingSmall};
    padding-bottom: ${(props) => props.theme.paddingSmall};
    padding-left: ${(props) => props.theme.paddingMedium};
    padding-right: ${(props) => props.theme.paddingMedium};
`;

export const HamburgerButton = styled.button`
    display: block;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: ${(props) => props.theme.color};

    @media (min-width: 768px) {
        display: none;
    }
`;

export const Title = styled.h1`
    flex: 1;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    color: ${(props) => props.theme.color};
    margin: 0;
`;

export const UserAvatar = styled.div`
    margin-right: ${(props) => props.theme.paddingSmall};
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`;
