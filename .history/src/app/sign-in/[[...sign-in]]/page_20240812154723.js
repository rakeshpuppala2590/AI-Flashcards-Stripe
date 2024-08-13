import { AppBar, Toolbar, Typography } from "@mui/material";
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
        </Toolbar>
      </AppBar>
    </Container>
  );
}
