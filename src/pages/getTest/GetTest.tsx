import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const GetTest = () => {
    const navigate = useNavigate();
  return (
    <Box sx={{height:'calc(100vh - 64px)'}}>
        <Grid container height={'100%'} padding={4}>
            <Grid item md={6} display={'flex'} alignItems={'center'}>
                <Box padding={4}>
                    <Typography variant='h3' fontWeight={'bold'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
                    <Box component={'p'} fontSize={'1.5rem'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </Box>
                    <Button variant='contained' onClick={()=>navigate('/get-test')}>Create an Account</Button>
                </Box>
            </Grid>
            <Grid item md={6} padding={4}>
                <Box borderRadius={'10px'} textAlign={'center'} bgcolor={'#78787845'} width={'100%'} height={'100%'}>q</Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default GetTest