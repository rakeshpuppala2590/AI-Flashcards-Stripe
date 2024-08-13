import getStripe from "../../utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Head from "next/head";
import {
  Grid,
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="100vW">
      <Head>
        <title>Flashcard Saas</title>
        <meta
          name="description"
          content="create flashcard from your text"
        ></meta>
      </Head>

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

      <Box
        sx={{
          textAlign: "center",
          my: 4,
        }}
      >
        <Typography variant="h2" gutterBottom>
          Welcome to Flashcard
        </Typography>
        <Typography variant="h5" gutterBottom>
          {" "}
          The easiest way to create flashcards from your text
        </Typography>
        <Button variant="contained" color="primary">
          Ge Started
        </Button>
      </Box>
      <Box sx={{ my: 6 }}>
        <Typography variant="h4" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            {" "}
            <Typography variant="h6" gutterBottom>
              Easy Text Input
            </Typography>
            <Typography variant="h6"> </Typography>
            <Typography variant="h6">
              Simply input your text and let our software do the rest.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            {" "}
            <Typography variant="h6">Smart Flashcards</Typography>
            <Typography variant="h6"> </Typography>
            <Typography variant="h6">
              Our AI intelligently breaks down your text into concise
              flashcards, perfect for your study
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            {" "}
            <Typography variant="h6">Accessible Anywhere</Typography>
            <Typography variant="h6"> </Typography>
            <Typography variant="h6">
              Access your flashcards from any device, at any time. Study on the
              go with ease.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ my: 6, textAlign: "center" }}>
        <Typography variant="h4">Pricing</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 2,
              }}
            >
              <Typography variant="h5" gutterBottom>
                Basic
              </Typography>
              <Typography variant="h6" gutterBottom>
                $5 / month{" "}
              </Typography>
              <Typography variant="h6">
                {" "}
                Access to basic flashcard features and limited storage
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Choose Basic
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 2,
              }}
            >
              <Typography variant="h5" gutterBottom>
                Pro
              </Typography>
              <Typography variant="h6" gutterBottom>
                $10 / month{" "}
              </Typography>
              <Typography variant="h6">
                {" "}
                Unlimited flashcards and storage
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Choose Basic
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 2,
              }}
            >
              <Typography variant="h5" gutterBottom>
                Basic
              </Typography>
              <Typography variant="h6" gutterBottom>
                $5 / month{" "}
              </Typography>
              <Typography variant="h6">
                {" "}
                Access to basic flashcard features and limited storage
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Choose Basic
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
