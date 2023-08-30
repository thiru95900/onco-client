import { Box, Typography, Grid, FormControlLabel, Checkbox, Button, TextField, FormControl } from '@mui/material'
import React from 'react'

const HearFromUs = () => {
  return (
    <Box display='flex' justifyContent='center' padding={{md:4, xl:8}} bgcolor={theme => theme.palette.secondary.main} color='#fff' className='hear-from-us'>
    <Box>
      <Typography variant='h3' textAlign='center' fontWeight='bold'>Let us know what you want to hear from us</Typography>
      <Typography mt={2} variant='h5' textAlign='center'>Choose from following options which related to your requirements</Typography>
      <form style={{marginTop:32}}>
        <Grid container spacing={2}>
            <Grid item md={6}>
                <FormControl fullWidth>
                    <label><Typography mb={1}>First Name <Typography component='span' color={'error'}>*</Typography></Typography></label>
                    <TextField  size='small' placeholder='Enter Here' />
                </FormControl>
            </Grid>
            <Grid item md={6}>
                <FormControl fullWidth>
                    <label><Typography  mb={1}>Last Name <Typography component='span' color={'error'}>*</Typography></Typography></label>
                    <TextField  size='small' placeholder='Enter Here' />
                </FormControl>
            </Grid>
            <Grid item md={6}>
                <FormControl fullWidth>
                    <label><Typography mb={1}>Email Address <Typography component='span' color={'error'}>*</Typography></Typography></label>
                    <TextField  size='small' placeholder='Enter Here'/>
                </FormControl>
            </Grid>
            <Grid item md={6}>
                <FormControl fullWidth>
                    <label><Typography mb={1}>Phone Number <Typography component='span' color={'error'}>*</Typography></Typography></label>
                    <TextField  size='small' placeholder='Enter Here'/>
                </FormControl>
            </Grid>
        </Grid>
        <Grid container spacing={1} mt={2} >
            <Grid item md={4} justifyContent={'center'}>
            <FormControlLabel control={<Checkbox sx={{color: '#fff'}}/>} label="Boold Cancer" />
            </Grid>
            <Grid item md={4}>
            <FormControlLabel control={<Checkbox sx={{color: '#fff'}}/>} label="Oral Cancer" />
            </Grid>
            <Grid item md={4}>
            <FormControlLabel control={<Checkbox sx={{color: '#fff'}}/>} label="Skin Cancer" />
            </Grid>
            <Grid item md={4}>
            <FormControlLabel control={<Checkbox sx={{color: '#fff'}}/>} label="Lung Cancer" />
            </Grid>
            <Grid item md={4}>
            <FormControlLabel control={<Checkbox sx={{color: '#fff'}}/>} label="Kidney Cancer" />
            </Grid>
            <Grid item md={4}>
            <FormControlLabel control={<Checkbox sx={{color: '#fff'}}/>} label="Colorectal Cancer" />
            </Grid>
        </Grid>
      </form>
      <Box mt={2}  display={'flex'} justifyContent={'center'}>
        <Button variant="contained">SUBMIT</Button>
      </Box>
    </Box>
  </Box>
  )
}

export default HearFromUs