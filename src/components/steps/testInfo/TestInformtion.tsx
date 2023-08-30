import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Checkbox, List, ListItem, ListSubheader, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StepsHeader from '../StepsHeader';
import { useEffect, useState } from 'react';
import { getAllTests_api } from '../../../services/clientApis';
import { bgCircles } from '../../../assets/images';
import BackButton from '../../UiElements/navigation/BackButton';
import { useUserContext } from '../../../context/UserContext';

const TestInformtion = (props: any) => {
  const { selectedTest, setSelectedTest } = useUserContext();
  const [expandedPanel, setExpandedPanel] = useState('panel1');
  const [isAgree, setIsAgree] = useState(false);
  const [testData, setTestData] = useState([]);


  useEffect(() => {
    fetchAlltests();
  },[]);

  const handleChange = (panel: string, checked?:any) => {
    setExpandedPanel(panel);
    if(checked){
      setSelectedTest(checked)
    }
  }

  async function fetchAlltests() {
    try {
      const response = await getAllTests_api();
      setTestData(response.data.message);
    } catch (error) {
      console.log(error);
      
    }
  }


  return (
    <Box position='relative' className='stepper-test-info' minHeight={'calc( 100vh - 56px - 69px)'}>
      <Box display='flex' alignItems='center' flexDirection='column' paddingY={{xl:'80px', lg:'45px', md:'2vw' , xs:'40px'}} paddingX={{xs:'16px' ,sm:'16px'}}>
      <StepsHeader title='Test Information' subTitle='You should aware about following ponits before having colonoscopy'/>
        <Box width={{xl:'1175px', lg:'800px', md:'60%', xs:'auto'}}>
          <Box>
          <ul className="ul ul-primary">
              <li>
                <Typography fontSize={{xl:'26px', lg:'18px', xs:'14px',sm:'16px'}} color='#6A6A6A'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit.
                </Typography>
              </li>
              <li>
                <Typography fontSize={{xl:'26px', lg:'18px', xs:'14px',sm:'16px'}} color='#6A6A6A'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit.
                </Typography>              
              </li>
              <li>
                <Typography fontSize={{xl:'26px', lg:'18px', xs:'14px',sm:'16px'}} color='#6A6A6A'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit.
                </Typography>              
              </li>
          </ul>
        <Box mb={{xl:'50px', lg:'25px'}}>
        <Typography fontSize={{xl:'32px', lg:'26px', xs:'16px',sm:'20px'}} fontWeight='bold' mb={{xl:'30px', lg:'20px',xs:'26px' , sm:'20px'}}>Select Test</Typography>
        {testData.map((test: any, index: number) => {
            return <Accordion key={test.test_info_id} expanded={expandedPanel === `panel${index+1}`} onChange={()=>handleChange(`panel${index+1}`)}>
           <AccordionSummary
             expandIcon={<ExpandMoreIcon />}
             aria-controls="panel1a-content"
             id="panel1a-header"
           >
             <Box display="flex" alignItems="center">
               <Checkbox  
                  checked={test.test_info_id === selectedTest?.test_info_id}
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, }}
                  onChange={()=>handleChange(`panel${index+1}`, test)}
                />
               <Typography fontSize={{xl:"18px", lg:'18px'}} color='#414141A5' ml={'8px'} fontWeight={'600'}>{test.name}</Typography>
             </Box>
           </AccordionSummary>
           <AccordionDetails>
             <Typography  fontSize={{xl:"22px", lg:'18px'}} fontWeight={'500'} color='#545454'>{test.descr}</Typography>
           </AccordionDetails>
         </Accordion>
        })}
        </Box>
      <Box display='flex' alignItems='center'  sx={{pt:{xs:'14px', sm:'0'}}}>
        <span><Checkbox sx={{padding:0}} checked={isAgree} onChange={()=>setIsAgree(!isAgree)}/></span><Typography color='#414141A5' fontSize={{xl:'26px',lg:'18px', sm:'16px', xs:'14px'}} component={'span'} paddingLeft='17px'>I have read and agree to the <strong style={{color:'#FF5016'}}>Terms & Conditions</strong> of test.</Typography>
      </Box>
      <Box display='flex' justifyContent='center' sx={{mt:{xs:'39px',xl:'56px', lg:'35px'},mb:{xl:'74px',xs:'38px'}}}>
        <Button variant='contained' onClick={props.handleNext} sx={{width:'50%'}}>Next</Button>
      </Box>
          </Box>
            <BackButton/>
        </Box>
      </Box>
      <Box component='img' zIndex={-1} src={bgCircles} bottom={0} width='100%' position='absolute'/>
    </Box>
  )
}

export default TestInformtion