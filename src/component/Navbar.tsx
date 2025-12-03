import { AppBar, Toolbar, Button, Box, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (id: string) => {
    handleScroll(id);
    handleMenuClose();
  };

  return (
    <AppBar position="fixed" className={styles.navbar}>
      <Toolbar className={styles.toolbar}>
        {/* This pushes nav links to center and menu to right */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Desktop Nav Links - visible only above 800px */}
        <Box className={styles.navLinks}>
          <Button className={styles.navbtn} disableRipple color="inherit" onClick={() => handleScroll('home')}>Home</Button>
          <Button className={styles.navbtn} disableRipple color="inherit" onClick={() => handleScroll('skills')}>Skills</Button>
          <Button className={styles.navbtn} disableRipple color="inherit" onClick={() => handleScroll('projects')}>Projects</Button>
          <Button className={styles.navbtn} disableRipple color="inherit" onClick={() => handleScroll('about')}>About</Button>
          <Button className={styles.navbtn} disableRipple color="inherit" onClick={() => handleScroll('contact')}>Contact</Button>
        </Box>

        {/* Mobile Menu Button - visible only 800px and below */}
        <IconButton
        disableRipple
              sx={{
                "&:focus": { outline: "none", boxShadow: "none" },
                "&:focus-visible": {
                  outline: "none",
                  boxShadow: "none",
                },
                fontSize: 29,
              }}
        className={styles.IconButton} color="inherit" onClick={handleMenuOpen}>
          <MenuIcon  />
        </IconButton>

        {/* Dropdown Menu */}
        <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}
        sx={{
                "& .MuiPaper-root": {
                backgroundColor: "rgba(10, 10, 10, 0.95)", // dark background
                color: "#D1D5DB",                          // text color
                borderRadius: "8px",                       // optional
                },
            }}
        >
          <MenuItem onClick={() => handleItemClick('home')}>Home</MenuItem>
          <MenuItem onClick={() => handleItemClick('skills')}>Skills</MenuItem>
          <MenuItem onClick={() => handleItemClick('projects')}>Projects</MenuItem>
          <MenuItem onClick={() => handleItemClick('about')}>About</MenuItem>
          <MenuItem onClick={() => handleItemClick('contact')}>Contact</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}