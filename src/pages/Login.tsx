import { Box } from "@mui/material";
import AuthForm from "../components/AuthForm";
import { CustomEventTarget } from "../types/auth";

export default function Login() {
  const onClickSubmitLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const target = e.target as CustomEventTarget;

    const email = target.email.value;
    const pw = target.pw.value;
    console.log(email, pw);
  };

  return (
    <Box component="main" sx={{ height: "100vh" }}>
      <AuthForm type={"login"} onClickSubmit={onClickSubmitLogin} />
    </Box>
  );
}
