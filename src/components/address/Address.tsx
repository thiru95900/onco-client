import { Typography } from "@mui/material"

const Address = (props:any) => {
  const {website,street,cityandpin,country,email}=props
  return (
    <>
    <Typography fontSize={{xl:'26px', xs:'16px'}} pt={2} variant="subtitle2">{website}</Typography>
    <Typography fontSize={{xl:'26px', xs:'16px'}} pt={2} variant="subtitle2">{street}</Typography>
    <Typography fontSize={{xl:'26px', xs:'16px'}} pt={2} variant="subtitle2">{cityandpin}</Typography>
    <Typography fontSize={{xl:'26px', xs:'16px'}} pt={2} variant="subtitle2">{country}</Typography>
    <Typography fontSize={{xl:'26px', xs:'16px'}} pt={2} variant="subtitle2">{email}</Typography>
    </>
  )
}

export default Address