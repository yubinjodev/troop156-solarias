import { Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";

type CustomLinkProps = {
  children: string;
  link: string;
};

export default function CustomLink(props: CustomLinkProps) {
  const { children, link } = props;

  const theme = useTheme();
  return (
    <Link
      href={link}
      sx={{
        color: `${theme.palette.secondary.main}`,
        cursor: "pointer",
        textDecoration: "none",
        fontWeight: 700,
      }}
    >
      {children}
    </Link>
  );
}
