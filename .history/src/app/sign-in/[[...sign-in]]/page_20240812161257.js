import { SignIn } from "@clerk/nextjs";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Box,
  Container,
} from "@mui/material";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <Container maxWidth="100vW">
      <AppBar
        position="static"
        sx={{ backgroundColor: "#3f51b5" }}
        gutterBottom
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
            }}
          >
            Flashcard Saas
          </Typography>
          <Button color="inherit">
            <Link href={"/login"} passHref>
              Login
            </Link>
          </Button>
          <Button color="inherit">
            <Link href={"/signup"} passHref>
              Sign Up
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h4" gutterBottom>
          Sign In
        </Typography>
        <SignIn />
      </Box>
    </Container>
  );
}
