import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { signUpApi } from "../api/api";
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { saveUser } from "../services/user.service";
import { AuthContext } from "../App";

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { setUser } = useContext(AuthContext);

  const handleLogin = async () => {
    const response = await signUpApi({ email, password });
    if (!response?.user) return;
    saveUser(response.user);
    setUser(response.user);
    if (response.user?.userType === "ADMIN") {
      navigate("/admin/dashboard");
    } else if (response.user?.userType === "REQUESTER") {
      navigate("/requester/dashboard");
    } else {
      navigate("/campaigns");
    }
  };
  return (
    <>
      <NavBar />
      <Container maxWidth="sm">
        <Box
          sx={{
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              px: 2,
              py: 8,
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              width: {
                xs: "100%",
                sm: 400,
              },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                mb: 3,
              }}
            >
              Sign Up
            </Typography>
            <TextField
              label="Full Name"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                mt: 3,
              }}
            >
              <Button variant="contained" color="primary" onClick={handleLogin}>
                SignUp
              </Button>
              <Typography variant="body2">Already have an account?</Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default SignUp;
