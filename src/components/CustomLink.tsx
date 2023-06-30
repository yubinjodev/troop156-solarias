import { Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function CustomLink(props: { children: string }) {
  const theme = useTheme();
  return (
    <Link
      sx={{
        color: `${theme.palette.secondary.main}`,
        cursor: "pointer",
        textDecoration: "none",
        fontWeight: 700,
      }}
    >
      {props.children}
    </Link>
  );
}
