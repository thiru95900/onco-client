import { Typography } from "@mui/material"

const TermsTypography = (props:any) => {
  return (
    <>
    <Typography  fontSize={{xl:'26px', xs:'16px'}} variant="subtitle1" sx={{fontWeight:'bold'}} pt={2} >{props.subheading}</Typography>
    <Typography fontSize={{xl:'26px', xs:'16px'}} >{props.discriptionPara1}</Typography>
    <Typography fontSize={{xl:'26px', xs:'16px'}}  pt={2}>{props?.discriptionPara2}</Typography>
    </>
  )
}

export default TermsTypography