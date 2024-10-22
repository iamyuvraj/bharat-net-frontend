import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, Container } from '@mui/material';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`logging in with email: ${email}, password: ${password}`);
    // Add your login logic here
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600"
    >
      <Paper elevation={3} className="p-6 rounded-lg w-full">
        <Typography variant="h5" component="h1" className="text-center mb-4">
          Welcome Back!
        </Typography>
        <form onSubmit={handleLogin} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-Mail"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="mt-2"
          >
            Log In
          </Button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account? <a href="/register" className="text-blue-600 hover:underline">Register</a>
        </p>
      </Paper>
    </Container>
  );
};

export default LoginPage;
