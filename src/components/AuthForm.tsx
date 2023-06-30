import { AuthFormProps } from "../types/auth";

import CoverImage from "../assets/images/cover.png";

import { Box, Button, TextField, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import CustomLink from "./CustomLink";

export default function AuthForm(props: AuthFormProps) {
  const { type, onClickSubmit } = props;

  return (
    <Box
      className="AuthForm-root"
      component="form"
      onSubmit={onClickSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Grid2 container sx={{ height: "100%", width: "100%" }}>
        <Grid2 xs={0} md={6} sx={{ maxHeight: "100%" }}>
          <Box
            component="img"
            src={CoverImage}
            sx={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </Grid2>
        <Grid2
          xs={12}
          md={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            sx={{
              maxWidth: 296,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Typography variant="h2" component="h1">
              {type === "login" && "Sign In"}
              {type === "signup" && "Sign Up"}
            </Typography>
            <TextField
              placeholder="example@email.com"
              label="Email"
              fullWidth
            />
            <TextField
              placeholder="JAHefWvXJeYdYefb"
              label="Password"
              fullWidth
            />
            <Button type="submit" variant="contained" fullWidth>
              {type === "login" && "Sign In"}
              {type === "signup" && "Sign Up"}
            </Button>

            {type === "login" && (
              <Typography>
                Don't have an account? <CustomLink>Sign Up</CustomLink>
              </Typography>
            )}

            {type === "signup" && (
              <Typography>
                Already have an account? <CustomLink>Sign In</CustomLink>
              </Typography>
            )}
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
