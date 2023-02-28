import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { NavLink, useNavigate } from "react-router-dom";
import logo from '../../img/4you.png'
import { useSelector } from "react-redux";
import '../header/header.scss'
import useAuth from "../../hooks/useAuth";

// ________________________menu_List__________________

import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
const Head = () => {
  const {auth, setAuth}=useAuth()
  const navigate=useNavigate()
  console.log('auth',auth, auth.index)
  let {cart}=useSelector(state=>state.CartReducer)
 
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
      
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
     
      
    };


    // __________________________After_Login_____________________

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    
    };
    const handleCloseLogout = () => {
      setAnchorEl(null);
      setAuth({})
      navigate('/logreg')
    
    };

  
  return (
    <>
 

<AppBar position="static" sx={{px:{md:4},pt:1}} style={{backgroundColor:'white'}} className='app'>
<Box style={{display:'flex', justifyContent:"center"}}>
       <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
             
            
            }}
          >
            <img src={logo} className='logo'/>
          </Typography>
    </Box>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         
         

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              
            >

<MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><NavLink to="/" style={{color:"black", textDecoration:"none"}}>Ana səhifə</NavLink></Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><NavLink to="/about" style={{color:"black", textDecoration:"none"}}>Haqqımızda</NavLink></Typography>
                </MenuItem>
             
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><NavLink to="/quiz" style={{color:"black", textDecoration:"none"}}>Gəl danışaq</NavLink></Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><NavLink to="/psx" style={{color:"black", textDecoration:"none"}}>Psixoloqlarımız</NavLink></Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><NavLink to="/" style={{color:"black", textDecoration:"none"}}>Toxucularımız</NavLink></Typography>
                </MenuItem>

                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><NavLink to="/product" style={{color:"black", textDecoration:"none"}}>Məhsullar</NavLink></Typography>
                </MenuItem>

                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><NavLink to="/blog" style={{color:"black", textDecoration:"none"}}>Blog</NavLink></Typography>
                </MenuItem>
            
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
            }}
          >
            <img src={logo}/>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           
              <Button
              
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              <NavLink   to="/"  style={{color:"black", textDecoration:"none",paddingRight:"20px", fontSize:'12px'}}>Ana səhifə</NavLink>
              </Button>
              <Button
              
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
            <NavLink to="/about"  style={{color:"black", textDecoration:"none",paddingRight:"20px", fontSize:'12px'}}>Haqqımızda</NavLink>
            </Button>
            <Button
              
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
          <NavLink to="/quiz" style={{color:"black", textDecoration:"none",paddingRight:"20px", fontSize:'12px'}}>Gəl danışaq</NavLink>
            </Button>


                <MenuItem  onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Typography textAlign="center">
                  <NavLink to="#" style={{color:"black", textDecoration:"none",paddingRight:"20px", fontSize:'15px'}}>Komandamız <i className="fa-solid fa-chevron-down"></i></NavLink>
                  </Typography>
                </MenuItem>
              
           
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem>
                <NavLink to="/psx" style={{color:"black", textDecoration:"none", fontSize:'14px'}}>Psixoloqlarımız</NavLink>
             
                </MenuItem>
                <MenuItem>
                <NavLink to="/" style={{color:"black", textDecoration:"none", fontSize:'14px'}}>Toxucularımız</NavLink>
                </MenuItem>
              
            </Menu>
        
            <Button
              
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
          <NavLink to="/product" style={{color:"black", textDecoration:"none", paddingRight:"20px", fontSize:'12px'}}>Məhsullar</NavLink>
            </Button>
            <Button
              
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
        <NavLink to="/blog"style={{color:"black", textDecoration:"none", paddingRight:"20px", fontSize:'12px'}}>Blog</NavLink>
            </Button>
            <Button
              
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
        <NavLink to="/"style={{color:"black", textDecoration:"none", paddingRight:"20px", fontSize:'12px'}}>Oyunlar</NavLink>
            </Button>
          
          </Box>

          <Box sx={{ flexGrow: 0}} style={{display:'flex'}}>
              {
                auth.index ? 
                <>
                   <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleCloseLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
                </> : (
                    <Button
              
              onClick={handleCloseNavMenu}
              sx={{color: 'white', display: 'block' }}
            >
              <NavLink to="/logreg"><i style={{color:"black"}} className="fa-regular fa-user"></i></NavLink>
            </Button>

                )
                }
          
        
            <Button
              
              onClick={handleCloseNavMenu}
              sx={{  color: 'white', display: 'block' }}
            >
             
            <NavLink to="/basket"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M13.5 21c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m-6 2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m16.5-16h-2.964l-3.642 15h-13.321l-4.073-13.003h19.522l.728-2.997h3.75v1zm-22.581 2.997l3.393 11.003h11.794l2.674-11.003h-17.861z"/></svg> <span className='text_decoration'> {cart.length}</span> </NavLink>
            </Button>


          </Box>
        </Toolbar>
      </Container>
    </AppBar>
     
    </>
  );
};

export default Head;
