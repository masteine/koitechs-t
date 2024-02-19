import { Box, Typography, Divider } from "@mui/material";
import { RouterLink } from "../../../ui/RouterLink";

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
        Please <RouterLink to="/">return back</RouterLink> and try again.
      </Typography>
    </Box>
  );
}
