import {
  Container,
  Typography,
  Divider,
  TextField,
  Button,
  Box
} from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

/*
  TODO
  *** I believe that for real projects, we need to move all logic into a hook as part of the service layer in app design. ***
 */

export default function Home() {
  const navigate = useNavigate();

  const [value, setValue] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    navigate(`${value}`);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Typography variant="h3" component="h1" align="center">
        GitHub Resume
      </Typography>

      <Divider />

      <Typography>Enter a GitHub username to generate a resume</Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", gap: "1rem" }}>
        <TextField
          name="username"
          placeholder="Enter a username"
          label="Github Username"
          onChange={handleChange}
          value={value}
          fullWidth
          required
          autoFocus
        />
        <Button variant="contained" size="large" type="submit">
          Submit
        </Button>
      </Box>
    </>
  );
}
