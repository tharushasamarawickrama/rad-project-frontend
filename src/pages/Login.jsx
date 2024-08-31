import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { loginApi } from "../api/api";
import { useState } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { saveUser } from "../services/user.service";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await loginApi({ email, password });
    saveUser(response.token, response.user);
    if (response.user.userType === "ADMIN") {
      navigate("/admin/dashboard");
    } else if (response.user.userType === "REQUESTER") {
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
              Login
            </Typography>
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                mt: 3,
              }}
            >
              <Button variant="contained" color="primary" onClick={handleLogin}>
                Login
              </Button>
              <Typography variant="body2">Don't have an account?</Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate("/signup")}
              >
                SignUp
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default Login;
