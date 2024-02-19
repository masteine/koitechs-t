import { Fragment } from "react";
import { Title } from "./Title";
import { Link as RouterLink } from "react-router-dom";
import { Repository } from "../../../api/user/types";
import { List, Link, ListItem, ListItemText } from "@mui/material";

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
          <Link
            key={id}
            to={html_url}
            target="_blank"
            component={RouterLink}
            variant="body2">
            <ListItem>
              <ListItemText primary={full_name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Fragment>
  );
}
