import { Box, Button, FormControl, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

import {useFormik} from 'formik';


import StepsHeader from '../../components/steps/StepsHeader'
import EmailVerify from '../../components/steps/createAccount/EmailVerification'
import { BiArrowBack } from 'react-icons/bi'
import { emailVerify_api } from '../../services/clientApis';
import { bgCircles } from '../../assets/images';
import BackButton from '../../components/UiElements/navigation/BackButton';
import { toast } from 'react-hot-toast';

const LoginPage = () => {
  const navigate = useNavigate();
  const {values, errors, touched, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues:{
      email: '',
    },
    onSubmit: submitHandler,
    validate:(values: any)=>{
        const errors: any = {};
        if(!values.email){
            errors.email = 'required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        };

        return errors
    }
  });

  async function submitHandler(values: any) {
      //next line only for development remove before code push
      // navigate('/verify-otp', {state:{ email: values.email, hash:'response.data.message'}});
      
     try {
        console.log(values);
        const formData = {
          ...values,
          login:true
        }
        const response = await emailVerify_api(formData);
        if(response.data.success){
          toast.success(`OTP send to ${values.email}.`)
          navigate('/verify-otp', {state:{ email: values.email, hash:response.data.message}});
        }
      } catch (error) {
        console.log(error);
      }
  }

  return (
   <Box minHeight={{xs:'calc( 100vh - 56px - 16px )',xl:'calc( 100vh - 100px - 16px)', lg:'calc( 100vh - 80px - 45px)'}}  display='flex' justifyContent='center' paddingX={{xs:'20px',sm:'0'}} paddingY={{xl:'95px', lg:'45px', md:'2vw' , xs:'50px'}} position='relative'>
    <Box>
        <EmailVerify>
            <StepsHeader title='Login' subTitle="Enter your register account to get started"/>
            <Box width={{ xl:'550px', lg:'500px'}} mt={{xl:'38px', lg:'20px'}}>
              <form onSubmit={handleSubmit}>
                <Stack >
                  <FormControl>
                    <label><Typography fontSize={{xl:'18px'}} fontWeight='400' mb={{xl:'17px', lg:'10px'}}>Email</Typography></label>
                    <TextField type='email' size='small' placeholder='Enter Here'
                      name='email'
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email?.toString()}
                      inputProps={{
                        style: { color: '#252525' }, 
                     }}
                    />
                  </FormControl>
                  <Box display='flex' justifyContent='center' width='100%' sx={{mt:{xl:'56px', lg:'35px', xs:'26px'}}}>
                    <Button fullWidth type='submit' variant='contained'>Continue</Button>
                  </Box>
                </Stack>
                  <Box mt={{xs:'20px', lg:'18px',xl:'24px'}}>
                    <Typography fontSize={{xl:'16px', xs:'12px'}} component='p' color='#414141A5'>
                      By Clicking the 'continue' button, you creating an account and you agree to our<Typography className='cursor-pointer' fontSize={{xl:'16px', xs:'12px'}} color='primary' fontWeight='600' component='span'> Privacy</Typography> and <Typography fontSize={{xl:'16px', xs:'12px'}} className='cursor-pointer' color='primary' fontWeight='600' component='span' onClick={()=> navigate('/terms-and-conditions')}> Terms of use.</Typography>
                    </Typography>
                    <Typography fontSize={{xl:'18px', xs:'14px'}} color='#414141A5' mt={2} textAlign='center'>Don't have account?<Link to='/get-test'><Typography fontWeight='600' color='primary' component={'span'}> Sign In</Typography></Link></Typography>
                  </Box>
              </form>
            </Box>
        </EmailVerify>
    </Box>
       <BackButton/>
        <Box component='img' zIndex={-1} src={bgCircles} bottom={0} width='100%' position='absolute'/>
   </Box>
  )
}

export default LoginPage