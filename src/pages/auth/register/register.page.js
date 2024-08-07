import React from 'react';

import {
    Container,
    Button,
    Form,
    Input,
    StyledLink,
    Title,
} from './register.styles';

const RegisterPage = () => {
    return (
        <Container>
            <Title>Register</Title>
            <Form>
                <Input type="text" placeholder="Full Name" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Button type="submit">Register</Button>
            </Form>
            <StyledLink to="/login">Already have an account? Login</StyledLink>
        </Container>
    );
};

export default RegisterPage;
