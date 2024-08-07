import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import { useAuth } from '../../../providers/auth.provider';

import { Button, Form, Input, StyledLink, Title } from './login.styles';

const LoginPage = () => {
    const { loginFn } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: 'test@example.com',
        password: '12345678',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const enterCredentials = async () => {
        try {
            const authData = await loginFn(formData);

            toast.success('Login successful!');

            if (authData) navigate('/');
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <>
            <Title>Login</Title>
            <Form>
                <Input
                    autoComplete="email"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    id="email"
                    name="email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <Input
                    autoComplete="current-password"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    id="password"
                    name="password"
                    required
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <Button onClick={() => enterCredentials()}>Login</Button>
            </Form>
            <StyledLink to="/register">
                Don't have an account? Register
            </StyledLink>
        </>
    );
};

export default LoginPage;
