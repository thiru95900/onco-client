import { Box } from '@mui/material'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
    const navigate = useNavigate();
    
  return (
    <Box position='absolute'  top={{xs:'16px',xl:'40px', lg:'30px'}} left={{xl:'100px', lg:'60px', xs:'1rem'}}  className='cursor-pointer' onClick={()=> navigate(-1)}>
        <BiArrowBack fontSize='2rem'/>
    </Box>
  )
}

export default BackButton