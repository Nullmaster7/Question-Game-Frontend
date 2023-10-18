import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';

const LoginPage = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Email:', email, 'Password:', password);
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h5" align="center" gutterBottom sx={{mb:3,mt:5}}>
                Welcome to the Question Game! You can create questions and share the link with your friends to start playing!
            </Typography>
            <Typography variant="h4" align="center" gutterBottom>
                Login
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    InputLabelProps={{
                        shrink: true,
                    }}
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <TextField
                    InputLabelProps={{
                        shrink: true,
                    }}
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Button variant="contained" color="primary" type="submit" fullWidth sx={{mb:2}}>
                    Login
                </Button>

                <Button variant="contained" color="secondary" type="submit" fullWidth>
                    Sign Up
                </Button>
            </form>
        </Container>
    );
};

export default LoginPage;
