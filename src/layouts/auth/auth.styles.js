import styled from 'styled-components';

export const AuthContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: ${(props) => props.theme.background};
`;

// Content box for the authentication form
export const AuthContent = styled.div`
    background-color: ${(props) => props.theme.cardBackground};
    padding: ${(props) => props.theme.paddingLarge};
    border-radius: ${(props) => props.theme.borderRadius};
    border: 1px solid ${(props) => props.theme.border};
    width: 100%;
    max-width: 400px;
    text-align: center;
`;
