import { Box } from "@mui/material";
import AuthForm from "../components/AuthForm";

export default function Login() {
  const onClickSubmit = () => [];

  return (
    <Box component="section"  sx={{height:"100vh", overflowY:"hidden"}}>
      <AuthForm type={"login"} onClickSubmit={onClickSubmit} />
    </Box>
  );
}
