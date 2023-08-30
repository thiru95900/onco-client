import { Box, Stack, Button, Typography, FormHelperText } from '@mui/material'
import React, { useState } from 'react'
import OTPInput from '../../components/UiElements/otpInput';
import StepsHeader from '../../components/steps/StepsHeader'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {BiArrowBack} from 'react-icons/bi'
import { otpVerify_api } from '../../services/clientApis';
import { bgCircles } from '../../assets/images';
import BackButton from '../../components/UiElements/navigation/BackButton';
import { toast } from 'react-hot-toast';
import { useUserContext } from '../../context/UserContext';
const LoginOtp = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const {setProfileData} = useUserContext();

    const {email, hash} = location.state;
    const [otp, setOtp] = React.useState('');
    const [errors, setErrors] = useState<any>(null); 

    const handleSubmit = async(event: any) => {
      event.preventDefault();
      if(!otp){
        setErrors('otp Required')
      }
      
      const data = {
        email,
        otp:otp,
        hash:hash,
        login:true
      }
      try {
        const response = await otpVerify_api(data);
        if(response.data.success){
          sessionStorage.setItem('userEmail', response.data.message.data[response.data.message.data.length-1].email)
          setProfileData(response.data.message.data[response.data.message.data.length-1]);
          toast.success(`User login successfully!`);
          navigate('/profile');
          
        }
      } catch (error) {
        
      }
    }

  return (
    <Box minHeight={{xs:'calc( 100vh - 56px - 7.5px )',sm:'calc( 100vh - 100px - 16px)'}} display='flex' justifyContent='center' paddingY={{xl:'95px', lg:'45px', md:'2vw' , xs:'50px'}} paddingX={{xs:"17px",sm:0}}  position='relative'>
        <Box width={{sm:350, xl:'570px', lg:'500px'}}>
        <StepsHeader title='Verification' subTitle="We sent the verification code to david.west@xyz.com Please enter below to verify your email address."/>
        <Box mt={'40px'}>
        <form onSubmit={handleSubmit}>
            <Stack >
            <OTPInput
                autoFocus
                isNumberInput
                length={4}
                className="otpContainer"
                inputClassName="otpInput"
                onChangeOTP={(otp: any) => {
                  if(otp){
                    setErrors('')
                  }
                  setOtp(otp)
                }}
            />
            {errors && <FormHelperText sx={{ml:2}}>{errors}</FormHelperText>}
            <Button sx={{mt:{xs:'35px',xl:"82px",lg:'40px'}}} type='submit' variant='contained'>Login</Button>
            </Stack>
            <Box >
            <Typography letterSpacing='0.14px' color='#414141A5'  fontSize={{xl:'16px', xs:'14px'}} textAlign='center' mt='24px' component='p'>
                Didn't receive a code? <Typography component='span' color='primary' fontWeight='500'>Resend</Typography>
              </Typography>
            </Box>
            <p>OTP:- {otp}</p>
        </form>
        </Box>
        </Box>
        <BackButton/>
        <Box component='img' zIndex={-1} src={bgCircles} bottom={0} width='100%' position='absolute'/>
    </Box>
  )
}

export default LoginOtp