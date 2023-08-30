import { Box, Typography } from '@mui/material'

const StepsHeader = ({title, subTitle}: {title: string, subTitle: string}) => {
  return (
    <Box >
        <Typography fontSize={{xl:'40px', lg:'26px', xs:'18px',sm:'23px'}}  textAlign={'center'} fontWeight={'600'}>{title}</Typography>
        <Typography fontSize={{xl:'24px', lg:'18px', xs:'14px',sm:'16px'}} color='#171717BD' mt={{xl:'17px', xs:'6px'}} textAlign={'center'} >{subTitle}</Typography>
    </Box>
  )
}

export default StepsHeader