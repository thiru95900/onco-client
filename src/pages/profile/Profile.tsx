import { Avatar, Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { userIcon } from '../../assets/images'
import { editIcon, locationIcon, mailIcon, phoneIcon } from '../../assets/icons'
import Footer from '../../components/footer/Footer'
import { useUserContext } from '../../context/UserContext'
import { getProfileData_api } from '../../services/clientApis'
import { getSessionStorageData, isAuthenticated } from '../../common/helperFunctions'

const Profile = () => {

    const {profileData, setProfileData} = useUserContext();

    console.log(getSessionStorageData());
    

    React.useEffect(()=>{
        async function getProfileData () {
            if(isAuthenticated()){
                try {
                    const response = await getProfileData_api(getSessionStorageData());
                    
                    if(response.data.success){
                        setProfileData(response.data.message[response.data.message.length-1]);
                    }

                } catch (error) {
                    
                }
            }
        };

        getProfileData();
    }, [])

  return (
    <Stack minHeight={'100vh'} justifyContent='space-between'>
        <Box display='flex' justifyContent='center' alignItems='center' height='100%' minHeight={'60vh'}>
                <Box width='85vw' /* height='300px' */ bgcolor='#F6F7FF' borderRadius={2} paddingY={{xl:'36px', md:4, xs:3}} paddingX={{xl:'40px', md:4, xs:3}} position='relative'>
                    <Typography fontSize={{xl:'36px', lg:'30px', xs:'20px'}} borderLeft='6px solid #FF5016' fontWeight='600'> &nbsp;&nbsp;My Profile</Typography>
                    <Box display='flex' pl={'10px'} gap={{xl:'60px', xs:2}} mt={{xl:'70px', lg:'35px'}}>
                        <Avatar
                        alt="Remy Sharp"
                        src={userIcon}
                        sx={{ width:{xl: 100, xs:50}, height: {xl: 100, xs:50}, outline:'4px solid #f8a48a' }}
                        />
                        <Box  flexGrow={2}>
                            <Typography fontSize={{xl:'32px', lg:'26px', xs:'14px'}} fontWeight='600'>{profileData?.first_name + ' ' + profileData?.last_name}</Typography>
                            <Grid container pt={{xl:'41px', lg:'25px'}}>
                                <Grid item md={3} xs={6} mb={{xs:0.5}} sx={{wordBreak:'break-word'}}>
                                    <Box mb={{xl:'11px', xs:0.25}} display='flex' alignItems='center' gap={'10px'}>
                                        <Box width={{xl:'auto', xs:'14px'}}>
                                            <img src={mailIcon}  height='100%' width='100%' alt="" />
                                        </Box>
                                        <Typography fontSize={{xl:'18px', lg:'16px', xs:'12px'}} fontWeight='200'>Email Address</Typography>
                                    </Box>
                                    <Typography fontSize={{xl:'26px', lg:'20px', xs:'12px'}} fontWeight='500'>{profileData?.email}</Typography>
                                </Grid>
                                <Grid item md={3} xs={6} mb={{xs:0.5}} sx={{wordBreak:'break-word'}}>
                                    <Box  mb={{xl:'11px', xs:0.25}} display='flex' alignItems='center' gap={'10px'}>
                                        <Box width={{xl:'auto', xs:'12px'}}>
                                            <img src={phoneIcon} height='100%' width='100%' alt="" />
                                        </Box>
                                        <Typography fontSize={{xl:'18px', lg:'16px', xs:'12px'}}  fontWeight='200'>Phone Number</Typography>
                                    </Box>
                                    <Typography fontSize={{xl:'26px', lg:'20px', xs:'12px'}}  fontWeight='500'>{profileData?.phone}</Typography>
                                </Grid>
                                <Grid item md={6} xs={12} mb={{xs:0.5}} sx={{wordBreak:'break-word'}}>
                                    <Box  mb={{xl:'11px', xs:0.25}} display='flex' alignItems='center' gap={'10px'}>
                                        <Box width={{xl:'auto', xs:'12px'}}>
                                            <img src={locationIcon} height='100%' width='100%'  alt="" />
                                        </Box>
                                        <Typography fontSize={{xl:'18px',  lg:'16px', xs:'12px'}} fontWeight='200'>Address</Typography>
                                    </Box>
                                    <Typography fontSize={{xl:'26px', lg:'20px', xs:'12px'}}  fontWeight='500'>{profileData?.address1}</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Box>
                        <Box position='absolute' top={52} right={'28px'} display='flex' alignItems='center' gap={1} className='cursor-pointer'>
                                <Box width={{xl:'auto', xs:'12px'}}>
                                    <img src={editIcon}  height='100%' width='100%' alt="" />
                                </Box>
                            <Typography fontSize={{xl:'24px', lg:'20px'}} color='primary' fontWeight='600'>Edit Profile</Typography>
                        </Box>
                    </Box>
                </Box>
        </Box>
        <Box>
            <Footer/>
        </Box>
    </Stack>
  )
}

export default Profile