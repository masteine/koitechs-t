import { Link as RouterLinkComponent } from "react-router-dom";
import { Link } from "@mui/material";
import { LinkProps } from "@mui/material/Link";
import { ReactNode } from "react";

type Props = {
  to: string;
  children: ReactNode;
} & LinkProps;

export function RouterLink({ to, children, ...props }: Props) {
  return (
    <Link to={to} component={RouterLinkComponent} {...props}>
      {children}
    </Link>
  );
}
