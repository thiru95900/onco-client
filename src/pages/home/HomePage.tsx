import { Box, Button, Card, Checkbox, FormControlLabel, Grid, Hidden, Paper, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import UserJourney from '../../components/userJourney/UserJourney';
import Footer from '../../components/footer/Footer';
import TestInfo from '../../components/steps/testInfo/HomeTestInfo';
import { useNavigate } from 'react-router-dom';
import { bannerImage, cancerImage } from '../../assets/images';
import { nextIcon, prevIcon } from '../../assets/icons';
import HearFromUs from '../../components/HearFromUs/HearFromUs';
import NewsLetter from '../../components/newsLetter/NewsLetter';
import { image2, image3 } from '../../assets/sliderImages/index';

const images = [cancerImage, image2, image3];

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    updateSliderImage((currentImageIndex - 1 + images.length) % images.length);
  }

  const handleNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
    updateSliderImage((currentImageIndex + 1) % images.length);
  }

  function updateSliderImage(index: number) {
    const sliderImage = document.getElementById("sliderImage") as HTMLImageElement;
    const imageUrl = images[index];
    sliderImage.src = imageUrl;
  }

  return (
    <Box>
      {/* Banner */}
      <Box className='home_page_banner' sx={{height:{sm:'calc(100vh)', xs:'calc(80vh - 48px)'},/*  maxHeight:{lg:'948px'} */}} py={{xs:'28px',lg:'0'}} bgcolor='#E9EAFF'>
        <Grid container height='-webkit-fill-available' >
          <Grid pr={{xs:'60px', sm:'auto'}} pl={{xl:'105px', lg:'58px', xs:'20px'}} item md={6} sm={12} display='flex' alignSelf={{ xs:'flex-start', sm:'center'}} justifyContent='center' alignItems='center' order={{xs:2, sm:2, md:2}}>
            <Box /* px={{sm:8, xs:2}} */ /* width='70%' */>
              <Typography fontSize={{xl:'56px', md:'38px', xs:'18px'}} fontWeight={600} pt={{xs:'60px', sm:'0px'}}  letterSpacing={0}>The Key to Unlocking Cancer</Typography>
              <Typography className='homepage_banner_info' fontSize={{xl:'26px', md:'18px', xs:'15px'}} mt={{md:'24px', xs:'10px'}} color='#6A6A6A' component='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
            <Hidden mdDown>
            <Box width={'100%'} mt={'101px'}>
              <span className='outer-line'>
                <span className='progress'></span>
              </span>
            </Box>
            </Hidden>
            </Box>
          </Grid>
          <Grid  className='home_page_banner_img' item md={6} sm={12} m={{xs:'0px auto', sm:'0px'}} padding={{ md:'0px',sm:'20px',}}  width={{md:'50vw', sm: '80vw', xs:'280px'}} order={{xs:1, sm:1, md:2}} height={'85vh'}>
            <img className='home_page_banner_img_1' src={bannerImage} width='100%' height='100%' style={{objectFit:'contain'}} alt="" />
          </Grid>
        </Grid>
      </Box>
      <Box bgcolor='#fff' sx={{height:'calc(100vh - 48px)', overflowX:'clip'}} position='relative' className='carousal-info' >
        <Paper className='absolute-x-center' sx={{ display:'flex', height:'90vh', width:'90vw', top:'-10%', boxShadow:'-2px 3px 20px 2px lightgray', borderRadius:'10px'}}>
          <Grid container>
            <Grid item md={6} order={{xs:2, md:1}} maxHeight='100%'>
              <Box /* height={{xl:'82%', xs:'60%'}} */ overflow={'hidden'}  paddingX={{xl:'77px', lg:'60px', md:'40px', xs:2}}  paddingY={{xl:'67px', lg:'60px', md:'40px', xs:2}}>
                  <Typography fontSize={{xl:'45px', md:'30px', xs:'16px'}} component='h2' fontWeight='600'>Imagine a world where cancer is reduced to chronic Condition</Typography>
                  <Typography className='homepage_banner_info_1' fontSize={{xl:'24px', md:'16px', xs:'14px'}} mt={{xs:'10px', md:'10px',sm:'0px'}} component='p' color='#6A6A6A'>
                    Cancer is expected to overtake heart disease as the #1 cause of mortality in the next few years. According to the American Cancer Society, cancer incidence is growing at unprecedented rates and accounted for 21% of all deaths in both men and women in 2019. According to the National Cancer Institute, cancer prevalence is expected to rise to 39.5%, where nearly four out of ten people will be diagnosed with cancer in their lifetime. Currently, over 100 million people across the globe suffer from solid tumors annually. Solid tumors include breast cancer, prostate cancer, lung cancer, colorectal cancer, liver cancer, ovarian cancer, bladder cancer, etc. – essentially, all the solid organ tumors.
                  </Typography>
              </Box>
            </Grid>
            <Grid item md={6} display='flex' alignItems={{sm:'center', xs:"initial"}} position='relative' order={{xs:1, md:2}}>
              <Box height={{md:'55vh', xs:'100%'}} position={{md:'absolute', sm:'relative'}} padding={{xs:2, md:0}} >
                <img id='sliderImage' src={cancerImage} height='100%' style={{borderRadius:'10px'}} /* width='100%' */ alt="" />
              </Box>
            </Grid>
          </Grid>
          <Box display='flex' gap={{xl:'36px', lg:'30px', xs:'16px'}} className='absolute-x-center' bottom={{sm:'5%', xs:'2%', xl:'60px'}} >
            <Box height={{xs:'40px', md: '50px', xl:'60px',}} width={{xs:'40px',  md: '50px', xl:'60px'}} sx={{cursor:'pointer'}} onClick={handlePrevImage}>
              <img src={prevIcon} height='100%' width={'100%'} alt="" />
            </Box>
            <Box height={{xs:'40px', md: '50px', xl:'60px',}} width={{xs:'40px',  md: '50px', xl:'60px'}} sx={{cursor:'pointer'}} onClick={handleNextImage} >
              <img src={nextIcon} height='100%' width='100%' alt="" />
            </Box>
          </Box>
        </Paper>
      </Box>
      {/* Hear from us */}
      {/* <HearFromUs/> */}
      <TestInfo/>
      <UserJourney/>
      <NewsLetter/>
      <Footer/>
    </Box>
  )
}

export default HomePage