import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Button, StepContent, StepIconProps, Typography } from '@mui/material';
import { FaQuestionCircle } from 'react-icons/fa';
import { BsFillCreditCardFill, BsFillCheckCircleFill } from 'react-icons/bs';
import { FaBriefcaseMedical, FaUserPlus, FaTruck } from 'react-icons/fa';

const steps = [
  {title: 'Create Account', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', icon: <FaUserPlus color={'#FF5016'} fontSize='1.52rem' />},
  {title: 'Answer Questionaries', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', icon:<FaQuestionCircle color={'#FF5016'} fontSize='1.52rem' />},
  {title: 'Payment', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', icon: <BsFillCreditCardFill color={'#FF5016'} fontSize='1.52rem' />},
  {title: 'Select Doctor', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', icon: <FaBriefcaseMedical color={'#FF5016'} fontSize='1.52rem' />},
  {title: 'Test Confirmation', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' , icon: <BsFillCheckCircleFill color={'#FF5016'} fontSize='1.52rem' />},
  {title: 'Track Order', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', icon: <FaTruck color={'#FF5016'} fontSize='1.52rem' />},
];

export default function UserJourney() {

    function ColorlibStepIcon(props: StepIconProps) {
    
    const icons: { [index: string]: React.ReactElement } = {
      1: <FaUserPlus color={'#FF5016'} fontSize='1.52rem' />,
      2: <FaQuestionCircle color={'#FF5016'} fontSize='1.52rem'/>,
      3: <BsFillCreditCardFill color={'#FF5016'} fontSize='1.52rem'/>,
      4: <FaBriefcaseMedical color={'#FF5016'} fontSize='1.52rem'/>,
      5: <BsFillCheckCircleFill color={'#FF5016'} fontSize='1.52rem'/>,
      6: <FaTruck color={'#FF5016'} fontSize='1.52rem'/>,
    };

    return (
        <Box display='flex' alignItems='center' justifyContent='center' bgcolor={'#E9EAFF'} height={{xs:50, md:70}} width={{xs:50, md:70}} borderRadius={'50%'}>
          {icons[String(props.icon)]}
        </Box>
      );
    }
  return (
    <Box  paddingX={{xl:'105px', lg:'50px', md:'20px', sm:'20px', xs:'40px'}} paddingY={{xl:'70px', lg:'60px', md:'40px', sm:'30px', xs:'30px'}}  bgcolor={theme => theme.palette.secondary.main} color='#fff' className='user-journey'>
        <Box  display={"flex"} alignItems={'center'} flexDirection={'column'}  mb={{xl:'100px', lg:'65px', sm:'30px', xs:'26px'}}>
            <Typography textAlign={'center'} fontSize={{xl:'40px', md:'34px', sm:'26px', xs:'24px'}} fontWeight={'bold'} >Ordering Process</Typography>
            <Box sx={{width:{sm:100, xs:'32px'},height:{sm:10, xs:'3px'},backgroundColor:'#FF5016',mt:{xl:'28px', lg:'24px', sm:'24px', xs:'9pt'}}}></Box>
       </Box>
      <ul className='stepper'>
        {steps.map((item, index) => (
          <li>
             <Box className='progress' mb={{xl:'42px', md:'40px',sm:'25px',}} id={`icon-${index}`} display='flex' alignItems='center' justifyContent='center' bgcolor={'#E9EAFF'} height={{xs:'53px', md:70, xl:90}} width={{xs:'53px', md:70, xl:90}} borderRadius={'50%'}>
              {item.icon}
             </Box>
             <Box className='content' sx={{width:{xl:'250px', md:'100%', xs:'50px'}}}>
              <Box margin={{sm:'0px auto', xs:0}}>
                <Typography  fontSize={{xl:'24px', md:'18px', xs:'16px'}} fontWeight='600'>{item.title}</Typography>
                <Typography color='#FFFFFFBA'  fontSize={{xl:'14px', md:'14px', xs:'12px'}}  component={'p'}>{item.content}</Typography>
              </Box>
             </Box>
          </li>
        ))}
      </ul>
    </Box>
  );
}