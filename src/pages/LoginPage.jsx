/* eslint-disable no-unused-vars */
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

export default function LoginPage() {
  const navigate = useNavigate();

  const { mutate, isLoading, isError, error, isSuccess } = useMutation(
    async (userinfo) => {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/login`,
        userinfo,
        { "Content-Type": "application/json" }
      );
      console.log("return data: ", data);
      return data;
    }
  );

  const onClick = (event) => {
    event.preventDefault();
    console.log("url : ", `${import.meta.env.VITE_BACKEND_URL}/api/login`);
    const data = new FormData(event.currentTarget);
    const loginData = {
      username: data.get("username"),
      password: data.get("password"),
    };
    mutate(loginData);
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
          Login
        </Typography>
        <Box component="form" noValidate onSubmit={onClick} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="username"
                label="username"
                name="username"
                autoComplete="username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link onClick={() => navigate("/signup")} variant="body2">
                {"Sign up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
