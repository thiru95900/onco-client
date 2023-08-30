import { Box, Button, FormControl, FormHelperText, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react';
// import OtpInput from 'react-otp-input';
import OTPInput from '../../UiElements/otpInput';
import StepsHeader from '../StepsHeader'
import { otpVerify_api } from '../../../services/clientApis';
import { Email } from '@mui/icons-material';
import { toast } from 'react-hot-toast';

const OtpVerification = ({data, setStep}: any) => {
  
    const [otp, setOtp] = useState('');
    const [errors, setErrors] = useState<any>(null); 

  const handleSubmit = async(event: any) => {
      //next line only for development remove before code push
      // setStep((step: any )=> step + 1);
    event.preventDefault();
    if(!otp){
      setErrors('otp Required');
      return
    }

    const formData = {
      email: data.email,
      hash: data.hash,
      otp: otp,
      login: false
    }

    try {
      const response = await otpVerify_api(formData);
      console.log(response);
      if(response.data.success){
        toast.success(`OTP verified succussfully.`);
        setStep((step: number) => step + 1);
      }
      
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Box minHeight={{xs:'calc( 100vh -  56px - 69px )',xl:'calc( 100vh - 100px - 130px)', lg:'calc( 100vh - 100px - 130px )'}} >
    <Box width={{xl:'570px', lg:'500px'}}>
      <StepsHeader title='Verification' subTitle={`We sent the code to ${data.email ? data.email: 'david.west@xyz.com'} Please enter below to verify your email address`}/>
      <Box width={{md:350, lg:'500px', xl:'570px'}} display='flex' margin={'40px auto'} justifyContent={'center'}>
        <form onSubmit={handleSubmit}>
          <Stack>
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
            {errors && <FormHelperText sx={{ml:2, color:'red'}}>{errors}</FormHelperText>}
            <Button type='submit' sx={{mt:{xs:'30px',xl:"56px",lg:'40px'}}} variant='contained'>Continue</Button>
            <Box>
              <Typography fontSize={{xl:'16px', xs:'14px'}} textAlign='center' mt='24px' component='p'>
                Didn't receive a code? <Typography component='span' color='primary' fontWeight='500'>Resend</Typography>
              </Typography>
            </Box>
          </Stack>
          <p>OTP SignUp:- {otp}</p>
        </form>
      </Box>
    </Box>
    </Box>
  )
}

export default OtpVerification