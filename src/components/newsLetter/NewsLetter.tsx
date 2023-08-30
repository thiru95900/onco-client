import { Box, Grid, Typography, TextField, Button, Card, Paper, Stack } from '@mui/material'
import React from 'react'
import { newLetterCircle, newLetterSingleCircle, newsLetter, rectangle } from '../../assets/images'

const NewsLetter = () => {
  return (
    <Box height={{xs:'300px', sm:'450px', md:'700px', xl:'1029px'}}position='relative' sx={{overflowX:'clip'}} className='news-letter'>
    {/* <Box display={'flex'} alignItems='start'> */}
      <Box component={'img'} src={newsLetter} position='absolute' maxWidth={{xs:'170px', sm:'280px', md:'450px', lg:'480px', xl:'690px'}} zIndex={10} bottom={0} left={{xs:'26px', sm:'5%', lg:'50px', xl:'105px'}}/>
      <Box position='absolute' height={{xs:'181px', sm:280, md:450, lg:'450px', xl:'650px'}} width={{xs:599, sm:899, md:1199, lg:1535, xl:'100vw'}}  zIndex={8}  bottom={0}>
        <img src={rectangle} height={'100%'} width={'100%'} alt="" />
        <Box position='absolute' width={{xs:'170px', sm:'300px', md:'420px', lg:'550px', xl:'835px'}} zIndex={9} top={{xs:'-35%', sm:'-40%', md:'-35%', lg:'-45%', xl:'-48%'}} left={{xs:'56px', lg:'8%', xl:'10%'}}>
          <img src={newLetterCircle} height={'100%'} width={'100%'} alt="" />
        </Box>
      </Box>
      <Box position='absolute' height={{xs:'30px', sm:'90px', lg:'100px', xl:'150px'}} width={{xs:'30px', sm:'80px', md:'90px', lg:'100px', xl:'150px'}} zIndex={9} bottom={{xs:'2%', sm:'2%', md:'2%', lg:'4%'}} right={{xs:'2%', sm:'2%', md:'2%'}} >
        <img src={newLetterSingleCircle} height={'100%'} width={'100%'} alt="" />
      </Box>
        <Paper sx={{width:{xs:'45vw', sm:'50vw', md:'500px', lg:'600px', xl:'868px',}, height:{xs:'150px',sm:'200px', md:'320px', lg:'320px', xl:'457px'}, zIndex:15, bottom:{sm:0, xs:'-5%'},}} className='absolute-x-end'>
          <Box paddingX={{xl:'62px', md:4, sm:'25px', xs:1}} paddingY={{xl:'89px', md:4, sm:'15px', xs:1}}>
            <Box mb={{ md:'25px', lg:'30px', xl:'40px', sm:'10px',xs:'10px'}}>
              <Typography fontSize={{xl:'38px', md:'30px', sm:'18px', xs:'12px'}} mb={{xl:'15px', lg:'15px', md:'6px'}} fontWeight='bold'> Have you subscribe our newsletter? </Typography>
              <Typography fontSize={{xl:'20px', md:'16px', sm:'14px', xs:'8px'}} fontWeight={300}> Enter your email address to subscribe </Typography>
            </Box>
            <form action="">
              <Stack className='subscribe'>
                <TextField sx={{width:{xl:'70%', xs:'100%'}}} placeholder='Enter your email address'/>
                <Button sx={{width:'20%', height:'45px', mt:{xl:'41px', lg:'30px', md:'20px', sm:'10px', xs:'10px'} }} variant='contained' color='primary'>SUBSCRIBE</Button>
              </Stack>
            </form>
          </Box>
        </Paper>
    {/* </Box> */}
   
    {/* <Grid container alignItems={'center'}>
      <Grid item md={6}>
        <Typography variant='h4' fontWeight='bold'>Have you subscribe our newsletter</Typography>
        <Typography variant='h6'>Enter your email address to subscribe</Typography>
      </Grid>
      <Grid item md={4} paddingX={2} >
        <TextField variant="outlined" placeholder='Enter your email address' fullWidth />
      </Grid>
      <Grid item md={2} >
        <Button variant='contained'>SUBMIT</Button>
      </Grid>
    </Grid> */}
  </Box>
  )
}

export default NewsLetter