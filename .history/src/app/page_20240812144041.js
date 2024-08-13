import getStripe from "../../utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Head from "next/head";
import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Head>
        <title>Flashcard Saas</title>
        <meta
          name="description"
          content="create flashcard from your text"
        ></meta>
      </Head>
      <Container maxWidth="100vW">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Flashcard Saas
            </Typography>
            <SignedOut>
              <Button color="inherit">Login</Button>
              <Button color="inherit">SignUp</Button>
            </SignedOut>
            <SignedIn>
              <Button>Logout</Button>
            </SignedIn>
          </Toolbar>
        </AppBar>

        <Box>
          <Typography variant="h2">Welcome to Flashcard</Typography>
          <Typography variant="h5">
            {" "}
            The easiest way to create flashcards from your text
          </Typography>
          <Button variant="contained" color="primary">
            Ge Started
          </Button>
        </Box>
      </Container>
    </>
  );
}