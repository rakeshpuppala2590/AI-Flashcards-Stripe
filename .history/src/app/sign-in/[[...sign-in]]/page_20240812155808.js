import { AppBar, Button, Toolbar, Typography, Box } from "@mui/material";
import Link from "next/link";
import { Container } from "postcss";

export default function SignUpPage() {
  return (
    <Container maxWidth="sm">
      <AppBar position="static" sx={{ backgroundColor: "#3f51b5" }}>
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
        <Typography variant="h4">Sign In</Typography>
        <SignIn />
      </Box>
    </Container>
  );
}
