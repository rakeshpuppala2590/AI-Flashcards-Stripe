import Image from "next/image";
import getStripe from "../../utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Container } from "postcss";
import Head from "next/head";
import { AppBar, Toolbar, Typography } from "@mui/material";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container maxWidth="lg">
        <Head>
          <title>Flashcard Saas</title>
          <meta
            name="description"
            content="create flashcard from your text"
          ></meta>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">Flascard Saas</Typography>
            </Toolbar>
          </AppBar>
        </Head>
      </Container>
    </main>
  );
}
