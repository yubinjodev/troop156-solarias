import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";

import CabinIcon from '@mui/icons-material/Cabin';

export default function Navbar() {
  return (
    <Box className="Navbar-root" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <CabinIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Troop 156
          </Typography>
          <Button color="inherit">Sign In</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
