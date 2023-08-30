
import React from "react";
import StepsHeader from "../StepsHeader";
import { List, ListItem, ListItemText, Box, ListItemAvatar, Avatar, Typography, Button, Modal, Divider } from "@mui/material";
import {RxCrossCircled} from 'react-icons/rx'
import { useNavigate } from "react-router";
import { bgCircles, helthProvider1, helthProvider2, helthProvider3 } from "../../../assets/images";
import BackButton from "../../UiElements/navigation/BackButton";
import { useUserContext } from "../../../context/UserContext";
import { createTest_api } from "../../../services/clientApis";
import {HelthProviderData }from './DummyHelthProvider'

const SelectHealthProvider = (props: any) => {
  const navigate = useNavigate();

  const {userData, selectedTest} = useUserContext();

  const [open, setOpen] = React.useState(false);

  async function handleCreateTest(testProvider: any){
    try {
      const data ={
        testId:selectedTest?.test_info_id,
        userId:userData.customer_id,
        agree: true,
        type:"",
        provider:testProvider,
        doctor:testProvider,
        amount: selectedTest?.amount
      };

      const response = await createTest_api(data);
      console.log(response);
      
      if(response.data.success){
        props.handleNext();
      }
    } catch (error) {
      
    }
  }
  const [uniqueid , SetShowDataid]= React.useState<number>(0);
  console.log(uniqueid,'uniqid');
  
  return (
    <Box  minHeight={{xs:'calc( 100vh - 125px )', sm:'calc( 100vh -56px )',xl:'calc( 100vh - 100px - 140px)', lg:'calc( 100vh - 80px - 90px)'}} display='flex' flexDirection={'column'} alignItems='center' position='relative' paddingTop={{xl:'80px', lg:'45px', md:'2vw' , xs:'40px'}} className='health-provider'>
      <BackButton/>
      <StepsHeader title="Select Health Provider" subTitle="Check out the following list of our expertise"/>
      <List sx={{ width:{ xl:'1160px', sm:'60%'},  mt:{xl:'12px', lg:'20px'} , mb:{md:'200px',}}}>
              <>
              {
                HelthProviderData.map((data:any,index:any)=>{                 
                    return ( 
                    <>
                        <ListItem key={index} alignItems="center"/*  sx={{borderBottom:'1px solid lightgray'}} */>
                            <Box display='flex' justifyContent='space-between' alignItems={{xs:'flex-start', md:'inherit'}} width='100%' marginY={{xl:'40px', lg:'20px', xs:'19px'}}>
                                <Box display='flex' alignItems='center' gap={{xl:'30px'}}>
                                   <ListItemAvatar>
                                      <Avatar className="avatar" alt="Remy Sharp" src={data.logo} sx={{ width: {xs:'30px',xl:'56px'}, height: {xs:'30px',xl:'56px'},  objectFit:'contain', bgcolor:'#E9EAFF' }}/>
                                   </ListItemAvatar>
                                      <Typography fontSize={{xl:'24px', lg:'18px',xs:'16px'}} fontWeight={'600'}>{data.name}</Typography>
                                </Box>
                                <Box className='provider-list' display='flex' flexDirection={{xl:'row', md:'row', xs:'column'}} alignItems='center' gap={{md:'30px', xs:'16px'}}>
                                   <Button className='Proxima-nova' sx={{ width:{md:'144px', xs:'126px'},fontSize:{xs:'12px',md:'5px',xl:'8px'}}}  variant="outlined" onClick={()=>{setOpen(true); SetShowDataid(data.id)}}>Check details</Button>
                                   <Button className='Proxima-nova'  sx={{ width:{md:'144px', xs:'126px'},}} variant="contained" onClick={props.handleNext}>GO</Button>
                                </Box>
                           </Box>
                       </ListItem>             
                           <Box sx={{border:'1px solid lightgray', mx:'16px'}} ></Box>
                    </>)
                })
              }
              </>
              
        {/* <ListItem alignItems="center" sx={{borderBottom:'1px solid lightgray'}}>
            <Box display='flex' justifyContent='space-between' width='100%' marginY={{xl:'40px', lg:'10px'}}>
                <Box display='flex' alignItems='center' gap='30px'>
                    <ListItemAvatar>
                        <Avatar className="avatar" alt="Remy Sharp" src={helthProvider1} sx={{ width: 56, height: 56,  objectFit:'none', bgcolor:'#E9EAFF' }}/>
                    </ListItemAvatar>
                    <Typography fontSize={{xl:'24px', lg:'20px'}} fontWeight={'600'}>Cigna Healthare</Typography>
                </Box>
                <Box className='provider-list' display='flex' flexDirection={{xl:'row', md:'row', xs:'column'}} alignItems='center' gap={'30px'}>
                    <Button className='Proxima-nova' sx={{ width:'144px',height:'36px'}} variant="outlined" onClick={()=>setOpen(true)}>Check details</Button>
                    <Button className='Proxima-nova'  sx={{ width:'126px', height:'36px'}} variant="contained" onClick={(item)=>handleCreateTest(item)}>GO</Button>
                </Box>
            </Box>
        </ListItem>
        <ListItem alignItems="center" sx={{borderBottom:'1px solid lightgray'}}>
            <Box display='flex' justifyContent='space-between' width='100%' marginY={{xl:'40px', lg:'10px'}}>
                <Box display='flex' alignItems='center' gap='30px'>
                    <ListItemAvatar>
                        <Avatar className="avatar" alt="Remy Sharp" src={helthProvider2} sx={{ width: 56, height: 56, objectFit:'none', bgcolor:'#E9EAFF' }}/>
                    </ListItemAvatar>
                    <Typography  fontSize={{xl:'24px', lg:'20px'}} fontWeight={'600'} >CVS Health Corporation</Typography>
                </Box>
                <Box className='provider-list' display='flex' flexDirection={{xl:'row', md:'row', xs:'column'}} alignItems='center' gap={'30px'}>
                    <Button className='Proxima-nova' sx={{ width:'144px',height:'36px'}} variant="outlined" onClick={()=>setOpen(true)}>Check details</Button>
                    <Button className='Proxima-nova'  sx={{ width:'126px', height:'36px'}} variant="contained" onClick={props.handleNext}>GO</Button>
                </Box>
            </Box>
        </ListItem>
        <ListItem alignItems="center" sx={{borderBottom:'1px solid lightgray'}}>
            <Box display='flex' justifyContent='space-between' width='100%' marginY={{xl:'40px', lg:'10px'}}>
                <Box display='flex' alignItems='center' gap='30px'>
                    <ListItemAvatar>
                        <Avatar className="avatar" alt="Remy Sharp" src={helthProvider3} sx={{ width: 56, height: 56,  objectFit:'none', bgcolor:'#E9EAFF' }}/>
                    </ListItemAvatar>
                    <Typography  fontSize={{xl:'24px', lg:'20px'}} fontWeight={'600'} >Elevance Health</Typography>
                </Box>
                <Box className='provider-list' display='flex' flexDirection={{xl:'row', md:'row', xs:'column'}} alignItems='center' gap={'30px'}>
                    <Button className='Proxima-nova' sx={{ width:'144px',height:'36px'}} variant="outlined" onClick={()=>setOpen(true)}>Check details</Button>
                    <Button className='Proxima-nova'  sx={{ width:'126px', height:'36px'}} variant="contained" onClick={props.handleNext}>GO</Button>
                </Box>
            </Box>
        </ListItem> */}
      </List>
      <Modal open={open} >
        <Box
            className="absolute-center"
            sx={{ width: {xl:'735px', lg:'535px', md: 400, xs:'90vw'}, height: {xl:'438px', lg:'338px', md: 400, xs:'90vw'}, borderRadius: 2, backgroundColor: "#fff", color: "#00000" }}
          >
            <Box position='absolute' sx={{cursor: 'pointer'}} zIndex={10} top={{xl:26, lg:22}} right={{xl:26, lg:22}} onClick={()=>setOpen(false)}><RxCrossCircled size={'24px'} color="#FF5016"/></Box>
            <Box>
              <List sx={{ px:{xl:'40px', lg:'20px'}, py:{xl:'44px', lg:'25px'}}} >
               
                  <ListItem alignItems="flex-start" sx={{paddingY:0, overflow:'hidden'}}>
                      <ListItemAvatar sx={{mr:{xl:'30px', lg:'20px'}}}>
                        <Avatar className="avatar" alt="Remy Sharp" src={ HelthProviderData[uniqueid - 1]?.logo} sx={{ width: 56, height: 56,  objectFit:'none', bgcolor:'#E9EAFF' }}/>
                      </ListItemAvatar>
                      <ListItemText
                        primary={ HelthProviderData[uniqueid - 1]?.name}
                        sx={{'.MuiListItemText-primary' : {
                          fontSize:{xs:'16px', xl:'24px', lg:'22px'},
                          fontWeight:'bold',
                          mb:{xl:'11px', lg:'0px'}
                        }}}
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: 'inline' }}
                              component="span"
                              fontSize={{xl:'21px', lg:'18px', xs:'14px'}}
                              color="#6A6A6A"
                            >
                              Healthcare and insurance company
                            </Typography>
                          </React.Fragment>
                        }
                      />
                  </ListItem>
                  <Divider variant="inset" component="li" sx={{my:{xl:'25px', lg:'10px'}}}/>
                  <Box overflow='auto' sx={{wordWrap:'break-word'}} boxSizing='border-box' textOverflow='ellipsis' height={{xl:'calc(257px - 44px)', lg:'calc(220px - 25px)'}} >
                    <Typography marginLeft={{xl:'100px', lg:'80px'}} fontSize={{xl:'24px', lg:'20px', xs:'16px'}} fontWeight={'500'} color='#171717BC' component='p'>
                      Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                  </Box>
              </List>
            </Box>
        </Box>
      </Modal>
      <Box component='img' zIndex={-1} src={bgCircles} bottom={0} width='100%' position='absolute'/>
    </Box>
  );
};

export default SelectHealthProvider;
