import { Fragment } from "react";
import Typography from "@mui/material/Typography";
import { Title } from "./Title";

type Props = {
  createdAt: string;
  publicRepos: number;
};

export function BriefInformation({ createdAt, publicRepos }: Props) {
  const createdYear = new Date(createdAt).getFullYear();
  return (
    <Fragment>
      <Title>Brief information</Title>
      <Typography sx={{ flex: 1 }}>
        On GitHub since <strong>{createdYear}</strong> and has{" "}
        <strong>{publicRepos}</strong> public respositories
      </Typography>
    </Fragment>
  );
}
