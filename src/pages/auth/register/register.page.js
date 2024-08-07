import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import {
    Container,
    Button,
    Form,
    Input,
    StyledLink,
    Title,
} from './register.styles';

import { useAuth } from '../../../providers/auth.provider';

const RegisterPage = () => {
    const { registerFn } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: 'test',
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

    const register = async () => {
        try {
            const authData = await registerFn(formData);

            toast.success('User registed!');

            if (authData) navigate('/login');
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <Container>
            <Title>Register</Title>
            <Form>
                <Input
                    autoComplete="name"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    id="name"
                    name="name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                />
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
                <Button onClick={() => register()}>Register</Button>
            </Form>
            <StyledLink to="/login">Already have an account? Login</StyledLink>
        </Container>
    );
};

export default RegisterPage;
