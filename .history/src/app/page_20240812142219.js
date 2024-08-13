import Image from "next/image";
import getStripe from "../../utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Head from "next/head";
import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Head>
        <title>Flashcard Saas</title>
        <meta
          name="description"
          content="create flashcard from your text"
        ></meta>
      </Head>
      <Container maxWidth="lg">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Flashcard Saas</Typography>
            <SignedOut>
              <Button>Login</Button>
              <Button>SignUp</Button>
            </SignedOut>
            <SignedIn>
              <Button>Logout</Button>
            </SignedIn>
          </Toolbar>
        </AppBar>
      </Container>
    </main>
  );
}