import React from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import picLogin from "../assets/picLogin.png";
import bgPic from "../assets/pic2.jpg";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
      }}
    >
      {/* Left Side - Image */}
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
          alt="Register Visual"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Right Side - Register Card with background image and transparent form */}
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
          Join Us Now
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
          <Stack spacing={2}>
            <TextField label="Full Name" variant="outlined" fullWidth InputLabelProps={{ style: { color: '#fff' } }} InputProps={{ style: { color: '#fff' } }} />
            <TextField label="Email Address" variant="outlined" fullWidth InputLabelProps={{ style: { color: '#fff' } }} InputProps={{ style: { color: '#fff' } }} />
            <TextField label="Password" type="password" variant="outlined" fullWidth InputLabelProps={{ style: { color: '#fff' } }} InputProps={{ style: { color: '#fff' } }} />
            <TextField label="Confirm Password" type="password" variant="outlined" fullWidth InputLabelProps={{ style: { color: '#fff' } }} InputProps={{ style: { color: '#fff' } }} />

            <Button variant="contained" color="primary" fullWidth>
              Register
            </Button>
          </Stack>

          <Typography mt={3} textAlign="center" color="white">
            Already have an account?{" "}
            <Link to="/login" underline="hover" style={{ color: '#bbdefb' }}>
              Log In
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
