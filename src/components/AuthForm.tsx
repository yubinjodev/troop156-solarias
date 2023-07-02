import { AuthFormProps } from "../types/auth";

import CoverImage from "../assets/images/cover.png";

import { Box, Button, TextField, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import CustomLink from "./CustomLink";
import { useState } from "react";

export default function AuthForm(props: AuthFormProps) {
  const { type, onClickSubmit } = props;

  const [email, setEmail] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const onChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPw(e.target.value);
  };

  return (
    <Box
      className="AuthForm-root"
      component="form"
      onSubmit={(e) => onClickSubmit(e)}
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
              name="email"
              type="email"
              value={email}
              onChange={onChangeEmail}
              placeholder="example@email.com"
              label="Email"
              fullWidth
            />
            <TextField
              name="pw"
              type="password"
              value={pw}
              onChange={onChangePw}
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
                Don't have an account?{" "}
                <CustomLink link={"/signup"}>Sign Up</CustomLink>
              </Typography>
            )}

            {type === "signup" && (
              <Typography>
                Already have an account?{" "}
                <CustomLink link={"/login"}>Sign In</CustomLink>
              </Typography>
            )}
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}