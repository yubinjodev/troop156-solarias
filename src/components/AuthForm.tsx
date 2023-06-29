import { AuthFormProps } from "../types/auth";

import CoverImage from "../assets/images/cover.png";

import { Box, Button, TextField, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function AuthForm(props: AuthFormProps) {
  const { type, onClickSubmit } = props;

  return (
    <Box
      component="form"
      onSubmit={onClickSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h2" component="h1">
        {type === "login" && "Sign In"}
        {type === "signup" && "Sign Up"}
      </Typography>
      <TextField placeholder="example@email.com" />
      <TextField placeholder="JAHefWvXJeYdYefb" />
      <Button type="submit">
        {type === "login" && "Sign In"}
        {type === "signup" && "Sign Up"}
      </Button>
    </Box>
  );
}
