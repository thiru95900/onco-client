import {useState} from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, Grid, Typography } from '@mui/material'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import { rectangleSmall, testImage } from '../../../assets/images';

const TestInfo = () => {
    const [expanded, setExpanded] = useState<string | false>('panel1');

    console.log(expanded);
    

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box sx={{overflowX:'clip'}} className='test-info'>
        <Box  display={"flex"} alignItems={'center'} flexDirection={'column'}  mb={{xl:'72px', lg:'30px', sm:'20px', xs:'20px'}}>
            <Typography textAlign={'center'} fontSize={{xl:'40px', lg:'32px',  md:'34px', sm:'26px', xs:'16pt'}} fontWeight={'bold'} >Test Information</Typography>
            <Box sx={{width:{sm:100, xs:'32pt'},height:{sm:7, xs:'3pt'},backgroundColor:'#FF5016',mt:{xl:'28px', lg:'20px', sm:'24px', xs:'9pt'}}}></Box>
       </Box>
       <Grid container className='test-accordian' marginBottom={{lg:'72px', xs:'0px'}}>
            <Grid item md={6} order={{xs:2, sm:2, md:1}} pl={{xl:'105px', lg:'50px',}}>
                <Box paddingY={6}  px={{xl:0, lg:0, sm:'46px', xs:'30px'}} >
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                        expandIcon={expanded === 'panel1' ? <AiOutlineMinus  color='#FF5016' size='21px'/> : <AiOutlinePlus size='18px'/>}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                        <Typography color={expanded === 'panel1' ? 'primary' : '#41414178'} fontSize={{xl:'30px', md:'26px', sm:'24px', xs:'22px'}} fontWeight={600}>
                            01&nbsp;
                        </Typography>
                        <Typography fontSize={{xl:'30px', md:'26px', sm:'24px', xs:'22px'}} fontWeight={600} color={expanded === 'panel1' ? '#414141' : '#41414178'}>Breast Cancer</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography className='testinformation_accordian_info' fontSize={{xl:'18px', md:'14px', sm:'16px', xs:'14px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.                        
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                        expandIcon={expanded === 'panel2' ? <AiOutlineMinus color='#FF5016' size='21px'/> : <AiOutlinePlus size='18px' />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                        >
                        <Typography color={expanded === 'panel2' ? 'primary' : '#41414178'} fontSize={{xl:'30px', md:'26px', sm:'24px', xs:'22px'}} fontWeight={600}>
                            02 &nbsp;
                        </Typography>
                        <Typography fontSize={{xl:'30px', md:'26px', sm:'24px', xs:'22px'}} fontWeight={600} color={expanded === 'panel2' ? '#414141' : '#41414178'}>
                        Lung Cancer
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography className='testinformation_accordian_info' fontSize={{xl:'18px', md:'14px', sm:'16px', xs:'14px'}}>
                            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                            laoreet.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                        expandIcon={expanded === 'panel3' ? <AiOutlineMinus color='#FF5016' size='21px'/> : <AiOutlinePlus size='18px'/>}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                        >
                            <Typography color={expanded === 'panel3' ? 'primary' : '#41414178'} fontSize={{xl:'30px', md:'26px', sm:'24px', xs:'22px'}} fontWeight={600}>
                                03 &nbsp;  
                            </Typography>
                            <Typography fontSize={{xl:'30px', md:'26px', sm:'24px', xs:'22px'}} fontWeight={600} color={expanded === 'panel3' ? '#414141' : '#41414178'}>
                            Oral Cancer
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography className='testinformation_accordian_info' fontSize={{xl:'18px', md:'14px', sm:'16px', xs:'14px'}}>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                            amet egestas eros, vitae egestas augue. Duis vel est augue.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Grid>
            <Grid item md={6} py={{xl:'auto', xs:4}} order={{xs:1, sm:1, md:1}} display='flex' alignItems='center' justifyContent='end' position='relative'>
                <Box width={{xs:'100vw', sm:'90%'}}display='flex' justifyContent={'end'}>
                    <Box component='img' id='rect-img' src={rectangleSmall} height={{xs:'103px', sm:'120px' , md:'150px', lg:'200px', xl:'auto'}} width={{sm:'100%', xs:'100vw'}}/>
                    <Box className='absolute-center' >
                        <Box component={'img'} id='top-img' sx={{objectFit:'cover', borderRadius:'4px'}} src={testImage} height={{xl:'400px', lg:'300px', md:'250px', xs:'205px' }} width={{xs:'80vw', sm:'auto'}} padding={{xs:2, sm:0}}/>
                    </Box>
                </Box>
            </Grid>
       </Grid>
    </Box>
    )
}

export default TestInfo