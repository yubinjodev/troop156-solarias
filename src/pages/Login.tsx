import { Box } from "@mui/material";
import AuthForm from "../components/AuthForm";

export default function Login() {
  const onClickSubmit = () => [];

  return (
    <Box component="main" sx={{ height: "100vh" }}>
      <AuthForm type={"login"} onClickSubmit={onClickSubmit} />
    </Box>
  );
}
