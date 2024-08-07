import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #f0f2f5;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex: 1;
`;

export const Main = styled.main`
    flex: 1;
    padding: 1rem;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
`;
