"use client"

import React, { useState } from 'react';
import { Box, AppBar, Toolbar, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import  './style.css';
function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="navbar">
      <AppBar position="static" sx={{ backgroundColor: "#fff", boxShadow: 'none', display: "flex", flexDirection: 'row' }}>
        <Toolbar className='anchorToolbar' id='fadeshow1'>
          <Link className='anchor' href="/">About Us Template</Link>
          <Link className='anchor' href="/blogs">Blogs</Link>
          <Link className='anchor' href="/logo">Logo Gallery</Link>
        </Toolbar>
        <Toolbar sx={{ marginLeft: 'auto' }} id='fadeshow2'>
          <IconButton
            id="resources-button"
            onClick={handleClick}
            aria-controls={open ? 'resources-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="resources-menu"
            anchorEl={anchorEl}
            open={open}
            MenuListProps={{
              'aria-labelledby': 'resources-button',
            }}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link className='anchor' href="/" id='about'>About Us Template</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link className='anchor' href="/blogs" id='block'>Blogs</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link className='anchor' href="/logo" id='logo'>Logo Gallery</Link>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
