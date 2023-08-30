import React from 'react'
import EmailVerify from './EmailVerification'
import { Typography, TextField, FormControl, Button } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { Link, useNavigate } from 'react-router-dom'
import StepsHeader from '../StepsHeader'
import {useFormik} from 'formik';
import { emailVerify_api } from '../../../services/clientApis'
import { toast } from 'react-hot-toast'

type IInitialValues = {
  email: string
}
const VerifyEmail = ({handleNextStep, getData}: any) => {
    const navigate = useNavigate();

    const {values, errors, touched, handleChange, handleBlur, handleSubmit} = useFormik({
        initialValues:{
          email: '',
        } as IInitialValues,
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

      async function submitHandler(values: IInitialValues) {
        //next line only for development remove before code push
        // handleNextStep((step: any )=> step + 1);
        try {
          const data = {
            ...values,
            login: false,
          }
          const response = await emailVerify_api(data);
          console.log(response);
          if(response.data.success){
            getData(values.email, response.data.message);
            toast.success(`OTP send on ${values.email}.`)
            handleNextStep((step: any )=> step + 1);
          }
        } catch (error) {
          console.log(error);
        }
      }

  return (
    <Box minHeight={{xs:'calc( 100vh -  56px - 69px )',xl:'calc( 100vh - 100px - 130px)', lg:'calc( 100vh - 100px - 130px  )'}} >
    <EmailVerify >
      <StepsHeader title='Create An Account' subTitle="Lets get started by creating an account for you"/>
      <Box width={{xl:'550px', lg:'500px'}} padding={{xs:2, sm:0}} m={{xl:'38px auto', lg:'20px auto'}}>
        <form onSubmit={handleSubmit}>
          <Stack>
            <FormControl>
              <label><Typography fontSize={{xl:'18px', xs:'12px'}} mb={{xl:'17px', lg:'10px',xs:'10px'}}>Email</Typography></label>
              <TextField type='email' size='small' placeholder='Enter Here'
                name='email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email?.toString()}
                sx={{}}
              />
            </FormControl>
            <Button sx={{mt:{xs:'26px',xl:'56px', lg:'35px'}}}   type='submit' variant='contained'>Continue</Button>
          </Stack>
            <Box mt={{xs:'20px',xl:'24px', lg:'18px'}}>
              <Typography fontSize={{xl:'16px', xs:'12px'}} component='p' color='#414141A5'>
                By Clicking the 'continue' button, you creating an account and you agree to our<Typography className='cursor-pointer' fontSize={{xl:'16px', xs:'12px'}} color='primary' fontWeight='600' component='span'> Privacy</Typography> and <Typography fontSize={{xl:'16px', xs:'12px'}} className='cursor-pointer' color='primary' fontWeight='600' component='span' onClick={()=> navigate('/terms-and-conditions')}> Terms of use.</Typography>
              </Typography>
              <Typography fontSize={{xl:'18px', xs:'14px'}} color='#414141A5' mt={{xs:'20px',xl:'35px', lg:'15px'}} textAlign='center'>Already have account?<Link to='/login'><Typography fontWeight='600' color='primary' component={'span'} > Login</Typography></Link></Typography>
            </Box>
        </form>
      </Box>
    </EmailVerify>
    </Box>
  )
}

export default VerifyEmail