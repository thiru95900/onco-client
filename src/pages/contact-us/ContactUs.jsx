import { Box, Button, Grid, TextField, Typography, Stack} from "@mui/material";
import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Instagram, } from '@mui/icons-material';
import YouTubeIcon from "@mui/icons-material/YouTube";
import { locationIcon, mailIcon, phoneIcon } from "../../assets/icons";
import { bgCircles } from "../../assets/images";

const ContactUs = () => {
  return (
    <Box position='relative' className='contact-us'>
      <Grid container sx={{ minHeight: {xl:"calc( 100vh - 100px)", lg:"calc( 100vh - 80px)", xs:'calc( 100vh - 56px)'} }}>
        <Grid item md={3.5} xs={12} lg={3.5} xl={3} bgcolor="#E9EAFF" display="flex" alignItems="end" order={{xl:1, sm: 2, md:1, xs:2}} position='relative' z-zIndex={-1}>
          <Box className='contact-us-content' paddingLeft={{xl:'68px', lg:'50px', md:'3vw', xs:'30px'}} paddingY={{md:'0px', xs:'40px'}} paddingBottom={{xl:'64px', lg:'40px', md:'20px'}}>
            <Typography fontWeight='600' fontSize={{xl:'36px', md:'30px', xs:'26px'}} mb='16px'>Reach us</Typography>
            <Box mb={{xl:'55px', xs:'40px'}} display='flex' alignItems='baseline' gap={'12px'}>
                <Box width={{xl:'auto', xs:'16px'}} >
                    <img src={mailIcon} height='100%' width='100%' alt="" />
                </Box>
                <Typography fontSize={{md:'20px', xs:'16px'}}>enquiry@oncolabs.com</Typography>
            </Box>
            <Typography fontWeight='600' fontSize={{xl:'36px', md:'30px', xs:'26px'}} mb='20px'>Contact us</Typography>
            <Box mb={{xs:'30px'}} display='flex' alignItems='baseline' gap={'12px'}>
                <Box width={{xl:'auto', xs:'12px'}}>
                    <img src={locationIcon} height='100%' width='100%' alt="" />
                </Box>
                <Typography fontSize={{xl:'20px', xs:'16px'}}letterSpacing={'0.8px'}>1607 Wasworth Pl, Baldwin,<br/>New Yark 11510,USA</Typography>
            </Box>
            <Box mb={{xl:2, xs:0.25}} display='flex' alignItems='baseline' gap={'12px'}>
                <Box width={{xl:'auto', xs:'16px'}}>
                    <img src={phoneIcon} height='100%' width='100%' alt="" />
                </Box>
                <Typography fontSize={{xl:'20px', xs:'16px'}}>(516) 208-5324</Typography>
            </Box>
            <Box display='flex' flexDirection={{lg:'row', sm:'column'}} mt={{md:'40px', xs:'29px'}} gap={{xl:'20px', xs:'16px'}}>
              <Typography fontSize={{xl:'20px', xs:'16px'}}>Follow us:</Typography>
              <Stack direction={'row'} alignItems="left" spacing={1} mb={'21px'}>
                <Box height={{md:'28px', xs:'22px'}} width={{md:'28px', xs:'22px'}} borderRadius='50%' bgcolor={'#43457D'} sx={{display:'flex', placeContent:'center', alignItems:'center'}}>
                  <FacebookOutlinedIcon sx={{ color: '#fff', height:{md:'22px', xs:'18px'}, width:{md:'22px', xs:'18px'} }} />
                </Box>
                  <Box height={{md:'28px', xs:'22px'}} width={{md:'28px', xs:'22px'}} borderRadius='50%' bgcolor={'#43457D'} sx={{display:'grid', placeItems:'center'}}>
                    <LinkedInIcon sx={{ color: '#fff', height:{md:'22px', xs:'18px'}, width:{md:'22px', xs:'18px'} }} />
                  </Box>
                  <Box height={{md:'28px', xs:'22px'}} width={{md:'28px', xs:'22px'}} borderRadius='50%' bgcolor={'#43457D'} sx={{display:'grid', placeItems:'center'}}>
                    <Instagram sx={{ color: '#fff', height:{md:'22px', xs:'18px'}, width:{md:'22px', xs:'18px'} }} />
                  </Box>
                  <Box height={{md:'28px', xs:'22px'}} width={{md:'28px', xs:'22px'}} borderRadius='50%' bgcolor={'#43457D'} sx={{display:'grid', placeItems:'center'}}>
                    <YouTubeIcon sx={{ color: '#fff', height:{md:'22px', xs:'18px'}, width:{md:'22px', xs:'18px'} }} />
                  </Box>
              </Stack>
            </Box>
          </Box>
        </Grid>
        <Grid item md={8.5} lg={8.5} xl={9}display='flex' justifyContent='center' order={{xl:2,  sm: 1, md:1, xs:1}} paddingX={{xs:'17px', md:0, sx:0}}/* alignItems='center' */>
          <Box width={{xl:'900px', lg:'750px', md:'550px', sm:'70%', xs:'100%'}} marginY={{xl:'110px', lg:'80px', md:'80px', xs:'40px'}}>
            <Typography fontWeight='600' fontSize={{xl:'40px', lg:'35px',  md:'34px', xs:'24px'}}>
              Get In Touch
            </Typography>
            <Typography fontSize={{xl:'24px', lg:'20px', md:'18px', xs:'14px'}} mt={{xl:'17px', lg:'10px', xs:'6px'}}>
              Our team would love to hear from you
            </Typography>
            <Box mt={{xl:'64px', lg:'30px', md:'25px',xs:'26px'}}>
              <form>
                <Grid container columnSpacing={'25px'} rowSpacing={'25px'}>
                  <Grid item md={6} xs={12} >
                  <label><Typography fontSize={{xl:'18px'}} fontWeight='400' mb={{xl:'17px', lg:'10px', xs:'10px'}}>First Name:</Typography></label>

                    <TextField fullWidth placeholder="Enter Here"></TextField>
                  </Grid>
                  <Grid item md={6} xs={12}>
                  <label><Typography fontSize={{xl:'18px'}} fontWeight='400' mb={{xl:'17px', lg:'10px', xs:'10px'}}>Last Name:</Typography></label>

                    <TextField fullWidth placeholder="Enter Here"></TextField>
                  </Grid>
                  <Grid item md={6} xs={12}>
                  <label><Typography fontSize={{xl:'18px'}} fontWeight='400' mb={{xl:'17px', lg:'10px', xs:'10px'}}>Email:</Typography></label>

                    <TextField fullWidth placeholder="Enter Here"></TextField>
                  </Grid>
                  <Grid item md={6} xs={12}>
                  <label><Typography fontSize={{xl:'18px'}} fontWeight='400' mb={{xl:'17px', lg:'10px', xs:'10px'}}>Phone Number:</Typography></label>

                    <TextField fullWidth placeholder="Enter Here"></TextField>
                  </Grid>
                  <Grid item md={6} xs={12}>
                  <label><Typography fontSize={{xl:'18px'}} fontWeight='400' mb={{xl:'17px', lg:'10px', xs:'10px'}}>Message:</Typography></label>
                    <TextField id='text-area' multiline rows={3} fullWidth placeholder="Enter Here"></TextField>
                  </Grid>
                </Grid>
                  <Box display='flex' justifyContent='center' mt={{xl:'60px', lg:'50px', xs:'40px'}} position="relative" zIndex={1}>
                    <Button sx={{ width:'70%' }} variant="contained">
                      SEND
                    </Button>
                  </Box>
              </form>
            </Box>
          </Box>
        </Grid>
        {/* this space is used for Right side */}
      </Grid>
      <Box component='img' zIndex={0} src={bgCircles} bottom={0} width='100%' position='absolute'/>
    </Box>
  );
};

export default ContactUs;
