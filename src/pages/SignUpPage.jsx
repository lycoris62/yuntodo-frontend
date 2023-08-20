/* eslint-disable no-unused-vars */
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Grid, Link } from "@mui/material";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  const { mutate, isLoading, isError, error, isSuccess } = useMutation(
    async (userinfo) => {
      const { data } = await axios.post(
        `${import.meta.env.VITE_LOCAL_URL}/api/signup`,
        userinfo,
        { "Content-Type": "application/json" }
      );
      console.log("return data: ", data);
      navigate("/login");
    }
  );

  const onClick = (event) => {
    event.preventDefault();
    console.log("url : ", `${import.meta.env.VITE_LOCAL_URL}/api/signup`);
    const data = new FormData(event.currentTarget);
    const signupData = {
      username: data.get("username"),
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword"),
    };
    mutate(signupData);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={onClick} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="confirmPassword"
            type="password"
            id="confirmPassword"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link onClick={() => navigate("/login")} variant="body2">
                Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUpPage;
