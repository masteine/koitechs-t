import { Box, Typography, Divider } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
  username: string | undefined;
};
export function UserNotFound({ username }: Props) {
  return (
    <Box>
      <Typography variant="h5">
        The user <strong>{username}</strong> has not found.
      </Typography>
      <Divider
        sx={{
          my: 2
        }}
      />
      <Typography>
        Please <Link to="/">return back</Link> and try again.
      </Typography>
    </Box>
  );
}
