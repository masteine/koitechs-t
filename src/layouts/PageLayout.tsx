import { Box, Container } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Outlet } from "react-router-dom";

export default function PageLayout() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        py: 1,
        backgroundColor: grey[100]
      }}>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          py: 4,
          borderRadius: ({ shape }) => shape.borderRadius,
          backgroundColor: ({ palette }) => palette.background.paper
        }}>
        <Container maxWidth="md">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              gap: "1rem"
            }}>
            <Outlet />
          </Box>
        </Container>
      </Container>
    </Box>
  );
}

PageLayout;
