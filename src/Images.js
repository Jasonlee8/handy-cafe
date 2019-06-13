import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import {Link} from 'react-router-dom'

import ImageGrid from './images/ImageGrid.js'
import { CssBaseline } from '@material-ui/core';
//import './Layout.css'

const drawerWidth = 200;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    height: 46,
    backgroundColor: 'black'
  },
  drawer: {
    width: 190,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 200,
    backgroundColor: 'beige'
  },
  typography: {
    height: 46,
  },
  toolbar: {
    height: 46,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    backgroundColor: 'beige'
  },
});

function Images(props) {

    const {classes} = props;

      return (
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <Typography className={classes.typography} variant="h6" color="inherit" noWrap>
                Handy Cafe
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer className={classes.drawer} variant="permanent" 
                  classes={{paper: classes.drawerPaper}} anchor="left">
            <div className={classes.toolbar} />
            <Divider />

            <List>
              <ListItem button key="Profile" component={Link} to='/profile'>
                <ListItemIcon>
                  <InboxIcon /> 
                </ListItemIcon>
                  <ListItemText primary="Home" />
              </ListItem>

              <ListItem button key="Images" component={Link} to='/images'>
                <ListItemIcon>
                  <InboxIcon /> 
                </ListItemIcon>
                  <ListItemText primary="Menus" />
              </ListItem> 

              <ListItem button key="Dashboard" component={Link} to='/dashboard'>
                <ListItemIcon>
                  <InboxIcon /> 
                </ListItemIcon>
                  <ListItemText primary="Booking List" />
              </ListItem>

              <ListItem button key="Maps" component={Link} to='/maps'>
                <ListItemIcon>
                  <InboxIcon /> 
                </ListItemIcon>
                  <ListItemText primary="Order Status" />
              </ListItem>
    
            </List>
            <Divider />
            <List>
              <ListItem button key="TableList" component={Link} to='/tableList'>
                <ListItemIcon>
                  <InboxIcon /> 
                </ListItemIcon>
                  <ListItemText primary="User Profile" />
              </ListItem>   

              <ListItem button key="Notifications" component={Link} to='/notifications'>
                <ListItemIcon>
                  <InboxIcon /> 
                </ListItemIcon>
                  <ListItemText primary="Contacts" />
              </ListItem>  
            </List>
          </Drawer>
          
          <main className={classes.content}>
            <div className={classes.toolbar} />
              <ImageGrid />
          </main>
        </div>
      )
    
  }

  Images.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Images);