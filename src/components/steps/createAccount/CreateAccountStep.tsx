import { Box, Button, FormControl, Stack, TextField, Typography } from '@mui/material'
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OtpVerification from './OtpVerification';
import CreateAccountForm from './CreateAccountForm';
import VerifyEmail from './VerifyEmail';
import { bgCircles } from '../../../assets/images';
import BackButton from '../../UiElements/navigation/BackButton';

const CreateAccount = (props: any) => {
  const navigate = useNavigate();

  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState({});

  const getData = (email: string, hash: string) => {
    setData(prev => {
      return {
        ...prev,
        email,
        hash
      } 
    });
  }

  return (
    <Box display={'flex'} flexDirection={'column'} minHeight={{xs:'calc( 100vh -56px-69px )',xl:'calc( 100vh - 100px - 130px - 160px)', lg:'calc( 100vh - 80px - 100px - 110px )'}} alignItems={'center'} position='relative' paddingY={{xl:'80px', lg:'55px', md:'2vw' , xs:'40px'}}>
      <Box>
            {/* <Grid container spacing={4}> */}
            {step === 0 && (
              // <Grid item md={6}>
                <VerifyEmail handleNextStep={setStep} getData={getData}/>
              // </Grid>
            )}
            {step === 1 &&(
              <OtpVerification setStep={setStep} data={data}/>
            )}
            {step === 2 &&(
             <CreateAccountForm handleNext={props.handleNext} data={data}/>
            )}
          {/* </Grid> */}
          {/* <Box display={'flex'} justifyContent={'center'} mt={3}>
            <Button variant='contained' onClick={() => step === 0 ? setStep(prev => prev + 1) : props.handleNext()}>{step === 0 ? 'Continue' : 'Next'}</Button>
          </Box> */}
          <BackButton/>
      </Box>
      <Box component='img' zIndex={-1} src={bgCircles} bottom={0} width='100%' position='absolute'/>
    </Box>
  )
}

export default CreateAccount