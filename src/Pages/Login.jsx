import React from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import picLogin from "../assets/picLogin.png";
import bgPic from "../assets/pic2.jpg";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
const notify = () => toast("Logged in successfully!");

const Login = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
      }}
    >
      {/* Left side - Image section */}
      <Box
        sx={{
          width: "50%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={picLogin}
          alt="Login visual"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Right side - Background with transparent form */}
      <ToastContainer />
      <Box
        sx={{
          width: "50%",
          height: "100vh",
          backgroundImage: `url(${bgPic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: 4,
        }}
      >
        <Typography variant="h4" fontWeight="bold" mb={4} color="white">
          Welcome
        </Typography>

        <Box
          sx={{
            width: "100%",
            maxWidth: 400,
            p: 4,
            borderRadius: 3,
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            color: "#fff",
          }}
        >
          <Stack spacing={3}>
            <TextField label="Email" variant="outlined" fullWidth InputLabelProps={{ style: { color: '#fff' } }} InputProps={{ style: { color: '#fff' } }} />
            <TextField label="Password" variant="outlined" type="password" fullWidth InputLabelProps={{ style: { color: '#fff' } }} InputProps={{ style: { color: '#fff' } }} />
            <Button variant="contained" fullWidth
            onClick={notify}
            >
              Login
            </Button>
          </Stack>

          <Typography mt={3} textAlign="center" color="white">
            Don't have an account?{" "}
            <Link to="/register" underline="hover" style={{ color: '#bbdefb' }}>
              Sign up for free
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
