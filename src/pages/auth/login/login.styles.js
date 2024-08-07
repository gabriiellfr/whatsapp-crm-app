import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    font-size: 24px;
    margin-bottom: 24px;
    color: ${(props) => props.theme.primary};
`;

export const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 24px;
    color: ${(props) => props.theme.primary};
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacingMedium};
`;

export const Input = styled.input`
    padding: ${(props) => props.theme.paddingMedium};
    margin-bottom: ${(props) => props.theme.paddingSmall};
    border: 1px solid ${(props) => props.theme.border};
    border-radius: ${(props) => props.theme.borderRadiusSmall};
    font-size: ${(props) => props.theme.fontSizeMedium};
    width: 100%;
    box-sizing: border-box;
    color: ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.background};
`;

export const Button = styled.button`
    padding: ${(props) => props.theme.paddingMedium};
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.color};
    border: none;
    border-radius: ${(props) => props.theme.borderRadiusSmall};
    font-size: ${(props) => props.theme.fontSizeMedium};
    cursor: pointer;
    transition: background-color ${(props) => props.theme.transition};

    &:hover {
        background-color: ${(props) => props.theme.primaryHover};
    }
`;

export const StyledLink = styled(Link)`
    color: ${(props) => props.theme.primary};
    text-decoration: none;
    font-size: ${(props) => props.theme.fontSizeSmall};
    margin-top: ${(props) => props.theme.spacingSmall};

    &:hover {
        text-decoration: underline;
    }
`;
