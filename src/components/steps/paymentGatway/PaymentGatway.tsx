import { Box, Button, FormControl, Grid, InputLabel, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import StepsHeader from '../StepsHeader'
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { create_stripeuser_id_api, save_setup_intent_api, user_setup_intent_api } from '../../../services/paymentApis';
import { StripeAddressElement } from '@stripe/stripe-js';
import { StripeCardElement, StripeElements } from '@stripe/stripe-js/types/stripe-js';
import { useUserContext } from '../../../context/UserContext'
import { getProfileData_api } from '../../../services/clientApis';
import { getSessionStorageData, isAuthenticated } from '../../../common/helperFunctions';
import { get_location_by_zip_api } from '../../../services/location';
const PaymentGatway = ({handleNext}: any) => {
 

  const {userData, setUserData} = useUserContext();
  console.log(userData);
  
  console.log(getSessionStorageData());
  

  React.useEffect(()=>{    
    async function getUserData () {
        try {
          const response = await getProfileData_api(getSessionStorageData());          
          if(response.data.success){
            setUserData(response.data.message[response.data.message.length-1]);
                  }
              } catch (error) {                  
              }          
      };
      getUserData();
  // get_location_by_zip('94105').then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})

  }, [])

  
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  console.log(elements);
  
  const cardElement: any = elements?.getElement(CardElement);

  const [CustomerDetails, setCustomerDetails] = useState({
    user_id:'1',
    customerEmail: userData?.email,
    nameOnCard: userData?.first_name + " " + userData?.last_name,
    country: "us",
    state: userData?.state,
    postalCode: userData?.zip,
    city: userData?.city,
    line_1:userData?.address1,
  });


  function handleChange(event:any) {
    const { name, value } = event.target;
    console.log(name, value);
    setCustomerDetails((CustomerDetails) => {
      return {
        ...CustomerDetails,
        [name]: value,
      };
    });
  }

  function handleSubmit(event:any) {
    event.preventDefault();

    const formData={
      user_id:21,
      name:CustomerDetails.nameOnCard,
      email: CustomerDetails.customerEmail,
      address:{
        line1: CustomerDetails.line_1,
        postal_code: CustomerDetails.postalCode,
        city: CustomerDetails.city,
        state: CustomerDetails.state,
        country: CustomerDetails.country,
      }
  
    }

    create_stripeuser_id_api(formData)
      .then((res)=>{
        user_setup_intent_api({customerId:res.data.message.id})
          .then((res)=>{
            stripe?.confirmCardSetup(res.data.message.client_secret,{
              payment_method: {
                card: cardElement,
                billing_details: {
                  name: CustomerDetails.nameOnCard,
                },
              },
          })
            .then((res)=>{
              save_setup_intent_api({payment_method_id: res?.setupIntent?.payment_method})
                .then((res)=>{
                  console.log(res,'final response')
                  handleNext();})
                .catch((err)=>{console.log(err,'save setup intent err') })})
            .catch((err)=>{console.log(err,'confirm card setup error')})})
          .catch((err)=>console.log(err,'setup intent error') )})
      .catch((err)=>{console.log(err,'user create error')})
    
   
  }
  return (
    <div >
      <Box padding={{xs:2, sm:2}} position='relative'>
        <Box position='absolute' top={'1rem'} left={{xl:'4rem', xs:'1rem'}} className='cursor-pointer' onClick={()=> navigate(-1)}>
          <BiArrowBack fontSize='2rem'/>
        </Box>
        <StepsHeader title='Payment' subTitle='Pay via Stripe & complete payment to get signed up'/>
          <Box  sx={{display:'flex',justifyContent:'center'}} >
            <Box  sx={{width:{xl:'30%', md:'40%', sm:'50%', xs:'auto'}}}>
              <form onSubmit={handleSubmit}>
                <Grid container>
                  <Grid item xs={12} md={12} xl={12}>
                    <InputLabel>Customer Email</InputLabel>
                    <TextField
                      placeholder="Email"
                      variant="outlined"
                      fullWidth
                      name="customerEmail"
                      value={CustomerDetails.customerEmail}
                      onChange={handleChange}
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12} md={12} xl={12}>
                  <Typography fontWeight='bold' mt={1}>Card Details</Typography>
                  <Box border='1px solid #A8A8A8' padding={1} borderRadius='3px'>
                    <CardElement />
                  </Box>
                  </Grid>
                  <Grid item xs={12} md={12} xl={12}>
                    <InputLabel>Name on Card</InputLabel>
                    <TextField
                      placeholder="name on card"
                      variant="outlined"
                      fullWidth
                      name="nameOnCard"
                      value={CustomerDetails.nameOnCard}
                      onChange={handleChange}
                      size="small"
                    />
                  </Grid>
                </Grid>
                <Typography fontWeight='bold' mt={1}>Customer Adress</Typography>
                <Grid container spacing={1}>
                  <Grid item xs={12} md={6} xl={12}>
                      <InputLabel>Country</InputLabel>
                      <TextField
                        placeholder="Country"
                        variant="outlined"
                        fullWidth
                        value={CustomerDetails.country}
                        name="country"
                        onChange={handleChange}
                        size="small"
                      />
                  </Grid>
                <Grid item xs={12} md={6} >
                    <InputLabel>State</InputLabel>
                    <TextField
                      placeholder="State"
                      variant="outlined"
                      fullWidth
                      value={CustomerDetails.state}
                      name="state"
                      onChange={handleChange}
                      size="small"
                    />
                </Grid>
                <Grid item xs={12} md={6} >
                    <InputLabel>City</InputLabel>
                    <TextField
                      placeholder="City"
                      variant="outlined"
                      fullWidth
                      value={CustomerDetails.city}
                      name="city"
                      onChange={handleChange}
                      size="small"
                    />
                </Grid>
                <Grid item xs={12} md={6} >
                    <InputLabel>Postal Code</InputLabel>
                    <TextField
                      placeholder="Postal Code"
                      variant="outlined"
                      fullWidth
                      value={CustomerDetails.postalCode}
                      name="postalCode"
                      onChange={handleChange}
                      size="small"
                    />
                </Grid>
                <Grid item xs={12} md={6} >
                    <InputLabel>Line 1</InputLabel>
                    <TextField
                      placeholder="Line 1"
                      variant="outlined"
                      fullWidth
                      value={CustomerDetails.line_1}
                      name="line_1"
                      onChange={handleChange}
                      size="small"
                    />
                </Grid>
                </Grid>
                <Box mt={2}>
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      backgroundColor: "#red",
                      color: "#111",
                      fontSize: "13px",
                      fontWeight: 300,
                      paddingTop: 1.2,
                      paddingBottom: 1.2,
                      "&:hover": {
                        backgroundColor: "#red",
                      },
                    }}
                    fullWidth
                  >
                    Add Customer
                  </Button>
                </Box>
              </form>
            </Box>
         </Box>
        </Box>
    </div>
  )
}

export default PaymentGatway