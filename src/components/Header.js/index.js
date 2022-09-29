import React from 'react';

import { AppBar, Toolbar, Button, IconButton, Icon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';


import { Logo } from "../../assets";

const Icons = [
  InstagramIcon, TwitterIcon, FacebookIcon
];

const Header = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between', bgcolor: '#faf9f5', color: 'black' }}>
          <div>
            {Icons.map((Icon, index) => {
              return (
                <IconButton
                  key={index}
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <Icon />
                </IconButton>
              )
            })}
          </div>

          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="Waza Booking"
          >
            <img src={Logo} alt="Waza Booking" style={{ width: 'auto', height: 50 }} />
          </IconButton>

          <Button color="inherit">708-508-4500</Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
