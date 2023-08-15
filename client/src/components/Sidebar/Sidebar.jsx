import React,{useState} from 'react';
import {Divider,Box,SwipeableDrawer,Button,ListItem,List,ListItemIcon,ListItemButton,ListItemText} from '@mui/material';
import {Home,Help} from '@mui/icons-material';
import Logo from '../Logo/Logo';

const Sidebar = ({toggleDrawer, open}) => {
  const list = () => (
    <Box
      sx={{ width: 250}}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List sx={{padding:0}}>
        <ListItem className={`flex jcc aic`} disablePadding sx={{padding:0,height:{lg:"70px",md:"60px",sm:"50px",xs:"40px"}}}>
          <Logo title={true} color={"#333"}/>
        </ListItem>
      </List>
      <Divider/>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Home/>
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary={"Rooms"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Help/>
            </ListItemIcon>
            <ListItemText primary={"About"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box>
      <SwipeableDrawer
        anchor={"right"}
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </Box>
  );
}

export default Sidebar