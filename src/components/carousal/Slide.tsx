import { Box, Typography } from '@mui/material'
import React from 'react'

const Slide = (props: any) => {
    const {title, content} = props.slide;
  return (
    <Box height={'100%'} p={4}>
       <Typography variant='h2' fontWeight='bold' textAlign={'center'}>{title}</Typography>
       <Box component='p' fontStyle={'20px'} textAlign={'center'}>{content}</Box>
    </Box>
  )
}

export default Slide