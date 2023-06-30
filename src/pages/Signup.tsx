import { Box } from "@mui/material";
import AuthForm from "../components/AuthForm";

export default function Signup() {
  const onClickSubmit = () => {};

  return (
    <Box component="main" sx={{ height: "100vh" }}>
      <AuthForm type={"signup"} onClickSubmit={onClickSubmit} />
    </Box>
  );
}
