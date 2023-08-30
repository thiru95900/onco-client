import { Box, Container, CssBaseline, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
// import onCoLabsIcon from '../../assets/icons/onCoLabsLogo2x.png'
import { muiStyle } from '../../theme/MuiStyle';
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Instagram, } from '@mui/icons-material';
import YouTubeIcon from "@mui/icons-material/YouTube";
import { onCoLogo, onCoLogoWhite } from '../../assets/images';

const Footer = () => {

    return (
        <>
            <Box sx={{ bgcolor: (theme) => theme.palette.secondary.main, }} paddingX={{xl: '105px', lg:'60px', md: '40px', sm: '30px', xs: '20px'}} paddingTop={{xl:'67px', lg:'50px', md:'50px', sm:'30px', xs:'22px'}} >
                <CssBaseline />
                    <Grid container columnSpacing={2} rowSpacing={1}>
                        <Grid item md={3} >
                            <Box>
                                <Box
                                    component="img"
                                    height={{sm:'54px', xs:'30px'}}
                                    width={{sm:'137px', xs:'70px'}}
                                    alt="The house from the offer."
                                    src={onCoLogoWhite}
                                />
                                <Box component='p' color='#fff' mb={{sm:'25px', xs:'12px'}} width={{xl:'311px', lg:'250px'}} letterSpacing={{xl:'0.64px', md:'0.64px', sm:'0px'}} sx={muiStyle.footertext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Box>
                                <Stack direction="row" alignItems="left" spacing={1} mb={'21px'}>
                                    <FacebookOutlinedIcon sx={{ color: '#fff' }} />
                                    <LinkedInIcon sx={{ color: '#fff' }} />
                                    <Instagram sx={{ color: '#fff' }} />
                                    <YouTubeIcon sx={{ color: '#fff' }} />
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid item md={3} xs={6}>
                            <Box sx={muiStyle.footerLink}>
                                <Typography fontSize={{xl:'20px', xs:'16px'}} color='#fff' fontWeight='medium'>Quick links</Typography>
                                <ul style={{ listStyle: 'none', padding: 0, fontWeight:'normal', color: '#fff', lineHeight: '21px' }}>
                                    <li className='footer-li'>Home</li>
                                    <li className='footer-li'>Get the Test</li>
                                    <li className='footer-li'>About Us</li>
                                    <li className='footer-li'>FAQ</li>
                                </ul>
                            </Box>
                        </Grid>
                        <Grid item md={3} xs={6}>
                            <Box sx={muiStyle.footerLink}>
                                <Typography fontSize={{xl:'20px', xs:'16px'}} color='#fff' fontWeight='medium'>Other links</Typography>
                                <ul style={{ listStyle: 'none', padding: 0, color: '#fff', lineHeight: '21px' }}>
                                    <li className='footer-li'>Newsletter Subscription</li>
                                    <li className='footer-li'>Privacy Policy</li>
                                    <li className='footer-li'>Terms & Condition</li>
                                </ul>
                            </Box>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <Box sx={muiStyle.footerLink}>
                                <Typography fontSize={{xl:'20px', xs:'16px'}} color='#fff' fontWeight='medium'>Contact Us</Typography>
                                <ul style={{ listStyle: 'none', padding: 0, color: '#fff', lineHeight: '21px' }}>
                                    <li className='footer-li' style={{marginBottom:'24px'}}>1607 Wadsworth Pl, Baldwin,<br/> New York 11510, USA</li>
                                    <li className='footer-li' >(516) 208-5324</li>
                                </ul>
                            </Box>
                        </Grid>
                    </Grid>
                {/* </Container> */}
            </Box>
            <Box sx={{ bgcolor: (theme) => theme.palette.primary.main, display:'grid', placeItems:'center' }} textAlign='center' color='#fff' height={{xl:'50px', lg:'50px', md:'40px', sm:'40px', xs:'40px'}} ><Typography fontSize={{xl:'16px'}}>@ 2022 Onco Filtration, Inc</Typography></Box>
        </>
    )
}

export default Footer