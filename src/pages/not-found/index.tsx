import { Box, Container, Typography } from "@mui/material";
import { RouterLink } from "../../ui/RouterLink";

export default function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh"
      }}>
      <Container maxWidth="md">
        <Typography variant="h1">404</Typography>
        <Typography variant="h6">
          The page you're looking for doesn't exist.
        </Typography>
        <RouterLink to="/" variant="body2">
          Back Home
        </RouterLink>
      </Container>
    </Box>
  );
}
