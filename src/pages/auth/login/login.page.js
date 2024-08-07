import React from 'react';

import { Button, Form, Input, StyledLink, Title } from './login.styles';

const LoginPage = () => {
    return (
        <>
            <Title>Login</Title>
            <Form>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Button type="submit">Login</Button>
            </Form>
            <StyledLink to="/register">
                Don't have an account? Register
            </StyledLink>
        </>
    );
};

export default LoginPage;
