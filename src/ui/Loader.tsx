import { Box, CircularProgress } from "@mui/material";

export function Loader() {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
      }}>
      <CircularProgress />
    </Box>
  );
}
