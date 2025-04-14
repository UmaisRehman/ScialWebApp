// LoginPage.jsx
import React, { useState } from "react";
import { TextField, Button, Box, Typography, Container } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
    console.log("Logging in with", email, password);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 8,
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLogin}
          >
            Log In
          </Button>
          <Button fullWidth variant="text" color="primary" sx={{ mt: 1 }}>
            Forgot Password?
          </Button>
          <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
            Don't have an account? <a href="/register">Register</a>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
