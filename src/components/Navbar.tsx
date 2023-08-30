import { Box, Typography, Divider, List, ListItem, ListItemButton, ListItemText, CssBaseline, AppBar, Toolbar, IconButton, Button, Drawer } from '@mui/material';
import * as React from 'react';

import {FiMenu} from 'react-icons/fi';
import {MdAccountCircle} from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';
import { muiStyle } from '../theme/MuiStyle';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { onCoLogo, userWhiteLogo } from '../assets/images/index';
import { navItems } from '../data/constant';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;

export default function Navbar(props: Props) {
  const navigate = useNavigate();
  const location = useLocation();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState('HOME');

  React.useEffect(()=>{
    if(location.pathname === ('/'))setActiveLink('HOME');
    else if(location.pathname.includes('get')) setActiveLink('Get The Test');
    else if(location.pathname.includes('about')) setActiveLink('About Us');
    else if(location.pathname.includes('faq')) setActiveLink('FAQ');
    else if(location.pathname.includes('contact')) setActiveLink('Contact Us');
    else setActiveLink('');
  },[location])  

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // small screen drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} >
      <KeyboardBackspaceIcon sx={{ p: 1, color: '#E9EAFFD6', fontSize: '33px' }} />
      <Box sx={{ p: 1, display: 'flex', justifyContent: 'space-between' }}  onClick={() => navigate('/profile')}>
        <img src={userWhiteLogo} alt='' height={'28pt'} width={'28pt'} />
        <Box>
          <NavigateNextIcon sx={{ color: '#E9EAFFD6', cursor: 'pointer' }} />
        </Box>
      </Box>
      <List sx={{ textAlign: 'center' }}>
        {navItems.map((item, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton onClick={()=> {
              setActiveLink(item.label)
              navigate(`${item.link}`)}
            }>
              <Typography 
                fontSize={'16px'} 
                className='Proxima-nova text-transform'
                fontWeight={activeLink === item.label ? `600` : `300`} 
                color={activeLink === item.label ? `#FF5016` : `#FFF`}
              >
                {item.label}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{bgcolor:'#fff', color: 'black', boxShadow:{md:'0px 3px 50px #00000029', xs:'0pt 3pt 6pt #00000029'}}}>
        <Toolbar sx={{display: 'flex', height:{xl:'100px', lg:'80px', xs:'56px',sm:'64px',md:'64px'}, padding:0, justifyContent:'space-between'}}>
          <Box
            marginLeft={{xl:'105px', xs:'16pt'}}
            component="img"
            sx={muiStyle.navIcon}
            alt="The house from the offer."
            src={onCoLogo}
          />
          <Box className='cursore-pointer' bgcolor='#101131' width='24px' height='24px' borderRadius='50%' mr={'16pt'} sx={{display:{xs:'grid', sm:'none'}, placeItems:'center'}}
            onClick={()=>setMobileOpen(true)}
          >
            <FiMenu color='#fff'/>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex'}, alignItems:'center', gap:{xl:'50px', lg:'25px', md:'20px', sm:'20px'}  }}>
            {navItems.map((item, index) => (
              <Box key={index} className='cursor-pointer' onClick={()=>{
                setActiveLink(item.label)
                navigate(`${item.link}`);
              }}>
                <Typography 
                  className='Proxima-nova text-transform' 
                  fontSize={{xl:'20px', lg:'14px', md:'16px'}}
                  fontWeight={activeLink === item.label ? `600` : `300`} 
                  color={activeLink === item.label ? `#FF5016` : `#000000`}
                >
                  {item.label}
                </Typography>
              </Box>
            ))}
            <Box marginRight={{xl:'112px', lg:'20px'}} className='cursor-pointer' onClick={()=>navigate('/profile')}>
                <MdAccountCircle size={'35px'}/>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor='right'
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}