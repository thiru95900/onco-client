import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { bgCircles, confirmationCircle, testConfirmation } from '../../../assets/images'
import { useNavigate } from 'react-router-dom'
import StepsHeader from '../StepsHeader'
import BackButton from '../../UiElements/navigation/BackButton'

const TestConfirmation = (props: any) => {
  const navigate = useNavigate();
  return (
    <Box display='flex' justifyContent='center' /* alignItems='center'  */sx={{minHeight:{md:'calc(100vh - (80px + 69px ))', xs:'calc(100vh - ( 56px + 69px ))'}, }} paddingY={{xl:'70px', lg:'45px'}} position='relative'>
      <BackButton/>
      <Box padding={{xs:2, sm:0}}>
        <Box height='100%' display='flex' flexDirection='column' alignItems='center'>
          <Box height='50vh' width='100%' className='test-confirm-bg-image' position='relative'>
            <Box component='img' src={confirmationCircle} className='absolute-center' width={{xl:'200px', lg:'120px',xs:'120px'}} height={{xl:'200px', lg:'120px',xs:'120px'}}/>
            <img src={testConfirmation} style={{objectFit:'contain'}} height='100%' width='100%' alt="" />
          </Box>
          <Box>
            <StepsHeader title='Test Booked Successfully!' subTitle='We will let you know about your order status & further test information'/>
            <Box display='flex' justifyContent='center' sx={{mt:{xl:'56px', lg:'35px'}}}>
              <Button variant='contained' fullWidth sx={{width:'50%'}} color='primary' onClick={() => navigate('/login')}>Back To Login</Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box component='img' zIndex={-1} src={bgCircles} bottom={0} width='100%' position='absolute'/>
    </Box>
  )
}

export default TestConfirmation