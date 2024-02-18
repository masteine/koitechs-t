import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

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
        <Link to="/">Back Home</Link>
      </Container>
    </Box>
  );
}
