import React from 'react';
import Table  from './Table'
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SpeedIcon from '@material-ui/icons/Speed';
import PersonIcon from '@material-ui/icons/Person';
import PermIdentityTwoToneIcon from '@material-ui/icons/PermIdentityTwoTone';
import ReportOffOutlinedIcon from '@material-ui/icons/ReportOffOutlined';
import RestorePageOutlinedIcon from '@material-ui/icons/RestorePageOutlined';
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";



const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
     
    },

    heading: {
      marginRight:940,
    },
    root: {
        width: 300,
        float:'left',
        marginRight:10,
       
      },

      right: {
        float:'right',
      },

    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    
      },

      text: {
          color: 'white',
      },
      Select: {
        color: 'white',
    },
    nav: {
        backgroundColor:"#043565",
    },
  title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    menuButton: {
        // marginRight: theme.spacing(2),
        padding:20,
        marginLeft:80,
      },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.95),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      color:'black',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 25),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color:'black',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },

    circle: {
        
        marginRight:theme.spacing(6),
    },

    filter: {
        marginTop:20,
        marginLeft:900,
       
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }));
  
  export default function Dash() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };
  
    const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };
  
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Menu>
    );
  
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
       
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );
  
    return (
      <div className={classes.grow}>
        <AppBar position="static" className={classes.nav}>
          <Toolbar>
           
            <Typography className={classes.title} variant="h6" noWrap>
              Vigilant
            </Typography>
            <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>

            <div >
            <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select" className={classes.text}>English</InputLabel>
            <Select native defaultValue="" id="grouped-native-select" >
              <option aria-label="None" value=""  />
            <option value={1}>Option 1</option>
                <option value={2}>Option 2</option>
            </Select>
          </FormControl>
            </div>
         
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle className={classes.circle}/>
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>

        <div>
        <Paper className={classes.root}>
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <SpeedIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">Dashboard</Typography>      
          </MenuItem>
          <hr></hr>
          <MenuItem>
            <ListItemIcon>
              <PersonIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">Employeemanagement</Typography>
          </MenuItem>
          <hr></hr>
          <MenuItem>
            <ListItemIcon>
              <PermIdentityTwoToneIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>
             Agent Management
            </Typography>
          </MenuItem>
          <hr/>
          <MenuItem>
            <ListItemIcon>
              <PersonIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">User Management</Typography>
          </MenuItem>
          <hr/>
          <MenuItem>
            <ListItemIcon>
              <ReportOffOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">Reports</Typography>
          </MenuItem>
          <hr/>
          <MenuItem>
            <ListItemIcon>
              <ReportOffOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">Reported Information</Typography>
          </MenuItem>
          <hr/>
          <MenuItem>
            <ListItemIcon>
              <PermIdentityTwoToneIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">Wanted</Typography>
          </MenuItem>
          <hr/>
          <MenuItem>
          <ListItemIcon>
            <RestorePageOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Pages</Typography>
        </MenuItem>
        
        </MenuList>
        
      </Paper>
      <Table />
        </div>

       
      
       
        {renderMobileMenu}
        {renderMenu}
      </div>
    );
  }
  const top100Films = [
    { title: "Singin' in the Rain", year: 1952 },
    { title: "3 Idiots", year: 2009 },
    { title: "Monty Python and the Holy Grail", year: 1975 }
  ];