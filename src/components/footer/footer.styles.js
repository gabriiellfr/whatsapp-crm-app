import styled from 'styled-components';

export const FooterContainer = styled.footer`
    color: ${(props) => props.theme.color};
    text-align: center;
    border-top: 1px solid ${(props) => props.theme.border};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${(props) => props.theme.paddingSmall};
`;

export const FooterText = styled.p`
    font-size: 0.875rem;
    margin: 0;
`;
