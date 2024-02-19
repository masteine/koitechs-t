import { Fragment } from "react";
import { Title } from "./Title";
import { Repository } from "../../../api/user/types";
import { List, ListItem, ListItemText } from "@mui/material";
import { RouterLink } from "../../../ui/RouterLink";

type Props = { repos: Repository[] };

export function Repositories({ repos }: Props) {
  const recentlyEdited = repos.sort(
    (a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
  );

  return (
    <Fragment>
      <Title> Respositories (recently edited)</Title>
      <List>
        {!recentlyEdited.length && <ListItem>No repositories found</ListItem>}
        {recentlyEdited.map(({ id, full_name, html_url }) => (
          <RouterLink key={id} to={html_url} target="_blank" variant="body2">
            <ListItem>
              <ListItemText primary={full_name} />
            </ListItem>
          </RouterLink>
        ))}
      </List>
    </Fragment>
  );
}
