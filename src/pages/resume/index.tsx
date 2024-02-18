import { Divider, Typography } from "@mui/material";
import { useGenerateResume } from "./useGenerateResume";
import { useParams } from "react-router-dom";
import { UserNotFound } from "./components/UserNotFound";

export default function Resume() {
  const { username } = useParams();
  const { repos, user, languages, isGenerating } = useGenerateResume({
    username
  });

  if (isGenerating) return <p>Loading...</p>;

  if (!user) {
    return <UserNotFound username={username} />;
  }

  return (
    <>
      <Typography variant="h3" component="h1">
        {user.name}
      </Typography>
      <Divider sx={{ my: 2 }} />
    </>
  );
}
