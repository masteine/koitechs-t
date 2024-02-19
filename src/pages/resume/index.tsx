import { Divider, Grid, Paper, Typography } from "@mui/material";
import { useGenerateResume } from "./useGenerateResume";
import { useParams } from "react-router-dom";
import { UserNotFound } from "./components/UserNotFound";
import { BriefInformation } from "./components/BriefInformations";
import { LanguageRating } from "./components/LanguagesRating";
import { Repositories } from "./components/Repositories";
import { Loader } from "../../ui/Loader";

export default function Resume() {
  const { username } = useParams();
  const { repos, user, languages, isGenerating, error } = useGenerateResume({
    username
  });

  if (error) {
    return <UserNotFound username={username} />;
  }

  return (
    <>
      <Typography variant="h3" component="h1">
        {user?.name}
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
          <Paper sx={{ p: 2, minHeight: "245px" }}>
            {!user ? (
              <Loader />
            ) : (
              <BriefInformation
                publicRepos={user?.public_repos}
                createdAt={user?.created_at}
              />
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} md={7}>
          <Paper sx={{ p: 2, minHeight: "245px" }}>
            {isGenerating ? (
              <Loader />
            ) : (
              <LanguageRating languages={languages} />
            )}
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            {isGenerating ? <Loader /> : <Repositories repos={repos} />}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
