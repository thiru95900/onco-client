import { Avatar, Box, Grid, Typography } from "@mui/material"
import { rectangleSmall, testImage } from '../../assets/images';
import Footer from "../../components/footer/Footer";


const AboutUs = () => {
  return (
    <Box>
      <Box paddingBottom={8} className='about-us'>
        <Box marginTop={{xl:'114px', lg:'45px', md:'45px', sm:'40px', xs:'36px'}} display={"flex"} alignItems={'center'} flexDirection={'column'} className='about-us'>
           <Typography fontSize={{xl:'40px', lg:'30px', sm:'22px', xs:'16px'}} fontWeight='bold'>Why Choose Us</Typography>
           <Box sx={{width:{ sm:'100px', xs:'32px'},height:{sm:'10px', xs:'3px'},backgroundColor:'#FF5016',mt:{xl:'28px', lg:'24px', sm:'15px', xs:'9px'}}}></Box>
        </Box>

       {/* this box is used for right side image*/ }
        <Grid container my={{xl:'120px', lg:'80px', md:'80px', }} justifyContent='end'>
          <Grid item md={6} lg={6} xl={6} sm={12} order={{xl:1, lg:1,  md:1, sm:2, xs:2}} display='flex' alignItems={'center'} position='relative'>
              <Box ml={{xl:'105px', lg:'80px', md:'55px'}} paddingX={{md:'0', sm:'32px', xs:'16px'}}>
                <Box width={{xl:'80%', lg:'90%', md:'90%'}}>
                  <Typography fontSize={{xl:'36px', lg:'34px', sm:'26px', xs:'20px'}} fontWeight='600' mb={{xl:'30px', lg:'20px'}}>Lorem ipsum dolor sit amet</Typography>
                  <Typography fontSize={{xl:'26px', lg:'22px', sm:'18px', xs:'14px'}} color='#6A6A6A'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </Typography>
                </Box>
              </Box>
          </Grid>
          <Grid item md={6} order={{xs:1, sm:1,  md:2, lg:2, xl:2}}  paddingY={{xl:4, xs:'45px'}}  display='flex' justifyContent={{sm:'end', xs:'start'}} alignItems='center' position='relative'>
              <Box display='flex' justifyContent='end'>
                  <Box width={{xs:'80vw', sm:'80vw', md:'50vw', xl:'50vw'}} height={{xl:'230px', sm:'150px', xs:'70px'}}>
                      <img src={rectangleSmall} height={'100%'} width='100%' alt="" />
                  </Box>
                  <Box className='absolute-center' >
                      <Box height={{xs:'144px', sm:'200px' ,md:'300px', xl:'400px',}}  width={{xs:'220px', sm: '60vw', md:'auto'}} padding={{xs:2, sm:0}}>
                          <img src={testImage} height='100%' /* width='100%' */ alt="" />
                      </Box>
                  </Box>
              </Box>
          </Grid>
        </Grid>
       
       {/* this box is used for Left side image*/ }
          <Grid container my={{xl:'120px', lg:'80px', md:'80px', }}>
             <Grid item md={6}  paddingY={{xl:4, xs:'45px'}}  display='flex' justifyContent='start' alignItems='center' order={{xl:1, xs:1}} position='relative'>
                <Box  display='flex' justifyContent='start'>
                    <Box width={{xs:'80vw', sm:'80vw', md:'50vw', xl:'50vw'}}  height={{xl:'230px', sm:'150px', xs:'70px'}}>
                        <img src={rectangleSmall} height={'100%'} width='100%' alt="" />
                    </Box>
                    <Box className='absolute-center-start' >
                        <Box height={{xs:'144px', sm:'200px' ,md:'300px', xl:'400px',}} width={{xs:'220px', sm: '60vw', md:'auto'}} padding={{xs:2, sm:0}}>
                            <img src={testImage} height='100%' /* width='100%' */ alt="" />
                        </Box>
                    </Box>
                </Box>
              </Grid>
              <Grid item md={6} lg={6} xl={6} sm={12} order={{xl:2, xs:2}}>
              <Box mr={{xl:'105px', lg:'80px', md:'55px'}} paddingX={{sm:'32px', xs:'16px'}} display={'flex'} justifyContent={'end'}>
                <Box  width={{xl:'80%', lg:'90%'}}>
                  <Typography fontSize={{xl:'36px', lg:'34px', sm:'26px', xs:'20px'}} fontWeight='600' mb={{xl:'30px', lg:'20px'}}>Lorem ipsum dolor sit amet</Typography>
                  <Typography fontSize={{xl:'26px', lg:'22px', sm:'18px', xs:'14px'}} color='#6A6A6A'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </Typography>
                </Box>
              </Box>
             </Grid>
          </Grid>

        {/* this box is used for right side image*/ }
        <Grid container my={{xl:'120px', lg:'80px', md:'80px', }} justifyContent='end'>
          <Grid item md={6} lg={6} xl={6} sm={12} order={{xl:1, lg:1,  md:1, sm:2, xs:2}} display='flex' position='relative'>
              <Box ml={{xl:'105px', lg:'80px', md:'55px'}} paddingX={{sm:'32px', xs:'16px'}}>
                <Box width={{xl:'80%', lg:'90%'}}>
                  <Typography fontSize={{xl:'36px', lg:'34px', sm:'26px', xs:'20px'}} fontWeight='600' mb={{xl:'30px', lg:'20px'}}>Lorem ipsum dolor sit amet</Typography>
                  <Typography fontSize={{xl:'26px', lg:'22px', sm:'18px', xs:'14px'}} color='#6A6A6A'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </Typography>
                </Box>
              </Box>
          </Grid>
          <Grid item md={6} order={{xs:1, sm:1,  md:2, lg:2, xl:2}}  paddingY={{xl:4, xs:'45px'}}  display='flex' justifyContent='end' alignItems='center' position='relative'>
              <Box display='flex' justifyContent='end'>
                  <Box width={{xs:'80vw', sm:'80vw', md:'50vw', xl:'50vw'}} height={{xl:'230px', sm:'150px', xs:'70px'}}>
                      <img src={rectangleSmall} height={'100%'} width='100%' alt="" />
                  </Box>
                  <Box className='absolute-center' >
                      <Box height={{xs:'144px', sm:'200px' ,md:'300px', xl:'400px',}}  width={{xs:'220px', sm: '60vw', md:'auto'}} padding={{xs:2, sm:0}}>
                          <img src={testImage} height='100%' /* width='100%' */ alt="" />
                      </Box>
                  </Box>
              </Box>
          </Grid>
        </Grid>
      </Box>

       {/* start of leadership team box */ }
       <Box sx={{backgroundColor:'#E9EAFF'}} paddingTop={{xl:'66px', lg:'40px', md:'40px', xs:"30px"}}  className='about-us' position={'relative'} >
          <Box  display={"flex"} alignItems={'center'} flexDirection={'column'} >
            <Typography fontSize={{xl:'40px', lg:'30px', sm:'22px',xs:'16px'}} fontWeight='bold'>Leadership Team</Typography>
            <Box sx={{width:{ sm:'100px', xs:'32px'},height:{sm:'10px', xs:'3px'},backgroundColor:'#FF5016',mt:{xl:'28px', lg:'24px', sm:'15px', xs:'9px'}}}></Box>
          </Box>
          {/* <Grid container py={'90px'} justifyContent={'space-around'}  spacing={1} className="leaderships-team" > */}
          <Box display='flex' flexWrap={'wrap'} justifyContent='center' gap={{xl:'137px', lg:'100px', md:'80px',/*  xs:'40px' */}} py={{xl:'85px', lg:'60px', md:'40px', xs:'30px'}}>
            {[1, 2, 3, 4].map((item) => (
              // <Grid item md={3} xs={6} display='flex' justifyContent='center' alignItems='center'>
                <Box display='inherit' flexDirection='column' justifyContent='center' alignItems={item % 2 === 0 ? 'start' : 'end' } paddingX={{xs:'47px', md:'0px'}} paddingBottom={{xs:'15px', md:'0px'}} width={{md:'auto',xs:'50%'}}>
                  <Box width={{xl:217, lg:170, sm:130, xs:74}} height={{xl:217, lg:170, sm:130, xs:74}} position='relative'>
                    <Box width={{xl:217, lg:170, sm:130, xs:74}} height={{xl:217, lg:170, sm:130, xs:74}} zIndex={1} position={'absolute'} bgcolor={'#FBD8CD'} borderRadius={'50%'} right={'-5%'}></Box>
                      <Box component='img'
                        alt="Remy Sharp"
                        src={'https://picsum.photos/217'}
                        position='relative'
                        zIndex={2}
                        sx={{ width: '100%', height: '100%', borderRadius:'50%' }}
                      />
                  </Box>
                  <Box mt={{xl:"35px", lg:'25px', md:'20px', xs:'12px'}}>
                    <Typography  textAlign='center' mb={{xl:'10px', lg:'8px', md:'8px', xs:'6px'}} fontSize={{xl:'26px', lg:'24px', md:'20px', xs:'18px'}} fontWeight='600' color='#47A7B7'>Lorem </Typography>
                    <Typography textAlign='center' fontSize={{xl:'22px', lg:'20px', md:'16px', xs:'12px'}} color='#6E6E6E'>CEO & President</Typography>
                  </Box>
                </Box>
              // </Grid>
            ))}
          </Box>
          {/* </Grid> */}
      </Box>
       <Footer/>
    </Box>
  )
}

export default AboutUs