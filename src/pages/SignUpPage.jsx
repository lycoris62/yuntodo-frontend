import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Grid, Link } from "@mui/material";
import axios from "axios";

const SignUpPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("url : ", `${import.meta.env.VITE_BACKEND_URL}/api/signup`);
    const data = new FormData(event.currentTarget);
    const signupData = {
      username: data.get("username"),
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword"),
    };

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/signup`, signupData)
      .then((res) => {
        console.log(res);
      });
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
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
              <Link href="/login" variant="body2">
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
