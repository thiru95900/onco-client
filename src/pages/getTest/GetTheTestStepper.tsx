import React from 'react';
import { Stepper, Step, StepLabel, Box, Button, Grid, StepIconProps, Typography, StepConnector, makeStyles } from '@mui/material';
import {IoChevronForwardOutline} from 'react-icons/io5';
import CreateAccount from '../../components/steps/createAccount/CreateAccountStep';
import TestInformtion from '../../components/steps/testInfo/TestInformtion';

import PaymentGatway from '../../components/steps/paymentGatway/PaymentGatway';
import SelectHealthProvider from '../../components/steps/selectHelthProvider/SelectHealthProvider';
import TestConfirmation from '../../components/steps/confirmation/TestConfirmation';

const steps = [
    {
      label: 'Create An Account',
    },
    {
      label: 'Test Information',
    },
    {
      label: 'Payment',
    },
    {
      label: 'Select Health Provide',
    },
    {
      label: 'Confirmation',
    },
  ];

const GetTheTestStepper = () => {
    
    const [activeStep, setActiveStep] = React.useState(0);
    const [isStepChanged, setIsStepChanged] = React.useState(false);

    const handleNext = () => {
      console.log('changed');
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      
      setIsStepChanged(true);
    };
    
    const scrollStepperHandler = (stepperDiv:HTMLElement) => {
      stepperDiv.style.scrollBehavior = 'smooth';
      stepperDiv.scrollLeft += stepperDiv.clientWidth / 2;
    }
  
    // const handleBack = () => {
    //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // };


    React.useEffect(()=>{
      if (isStepChanged) {
        const stepperDiv = document.getElementById('stepper') as HTMLElement;
        
        scrollStepperHandler(stepperDiv);
        setIsStepChanged(false)
      }
    },[isStepChanged]);

    function ColorlibStepIcon(props: StepIconProps) {      
        return (
            <Box height={{xl:40, md:25, xs:20}} width={{xl:40, md:25, xs:20}} sx={{borderRadius:'50%', display:'flex', justifyContent:'center', alignItems:'center'}} bgcolor={props.completed ? '#FBD8CD' : props.active ? '#FF5016' : '#E9EAFF'}>
              <Typography fontSize={{xl:'14px', lg:'12px'}} fontWeight={600} color={props.completed ? 'primary' : props.active ? "#fff" : '#6A6A6A'} >0{props.icon}</Typography>
            </Box>
          );
    }

    const CustomStepConnector = (props: any) => {
      return (
        <Box display='flex' alignItems={'center'}>
          <IoChevronForwardOutline size='1.5rem' color='#E9EAFF'/>
        </Box>
      );
    };

  return (
    <Box >
          <Box bgcolor={ theme => theme.palette.secondary.main} width={'100%'} display='flex' justifyContent='center' position='sticky' zIndex={100} top={{xs:'56px',sm:'64px',md:'64px', lg:'80px',xl:'100px' }}> {/* 'here we set position from top for stepper' */}
                <Box width={{xs:'100%', lg:'100%'}} display='flex' justifyContent='center'>
                    <Stepper id='stepper' activeStep={activeStep} connector={<CustomStepConnector/>}  sx={{overflowX:'auto', height:{xs:'69px',sm:'64px',md:'64px', lg:'80px',xl:'130px'}}} className='get-test-stepper'>
                       {/* here we set height of stepper as per screen size */}
                      {steps.map((step: any, index) => {
                        return (
                        <Step key={index} sx={{minWidth:{xs:'50%', sm:'auto'}, /* paddingY:{xl:4, md:3, xs:'2rem'} */}} onClick={()=>setActiveStep(index)}>
                          <StepLabel sx={{p:0}} StepIconComponent={ColorlibStepIcon} >
                            <Typography color='#fff' fontSize={{xs:'12px',xl:'24px' ,lg:'18px'}} fontWeight={activeStep === index ? '600' : 'normal'}>{step.label}</Typography>
                          </StepLabel>
                        </Step>
                      )})}
                    </Stepper>
                </Box>
          </Box>
          <Box  >
            {activeStep === 0 && (
                <CreateAccount handleNext={handleNext}/>
            )}
            {activeStep === 1 && (
                <TestInformtion handleNext={handleNext} /* handleBack={handleBack} *//>
            )}
            {activeStep === 2 && (
                <PaymentGatway handleNext={handleNext} /* handleBack={handleBack} *//>
            )}
            {activeStep === 3 && (
                <SelectHealthProvider handleNext={handleNext} /* handleBack={handleBack} *//>
            )}
            {activeStep === 4 && (
                <TestConfirmation handleNext={handleNext} /* handleBack={handleBack} *//>
            )}
            {/* {activeStep > 0 && <Button onClick={handleBack} >Prev</Button>}
             {activeStep < steps.length-1 && <Button onClick={handleNext}>Next</Button>} */}
          </Box>
    </Box>
    
  )
}

export default GetTheTestStepper