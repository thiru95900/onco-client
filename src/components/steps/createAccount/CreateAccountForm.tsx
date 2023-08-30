import { Grid, FormControl, TextField, Button, Box, Typography, Select, MenuItem, FormHelperText } from '@mui/material'
import React from 'react'
import StepsHeader from '../StepsHeader';
import {useFormik} from 'formik';
import { createAccountFormSchema } from '../../../validation/createAccountValidate';
import { createAccount_api } from '../../../services/clientApis';
import { useUserContext } from '../../../context/UserContext';
import { toast } from 'react-hot-toast';


import { useNavigate } from 'react-router';
import {LuAsterisk} from 'react-icons/lu'
interface ICreateAccount {
  firstName: string
  lastName: string
  gender: string
  dob: string
  email: string
  phone: string
  referCode: string
  addressLine_1: string
  addressLine_2: string
  city: string
  state: string
  zipCode: string
}

const CreateAccountForm = (props: any) => {
  const {setUserData} = useUserContext();
  const {values, errors, touched, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues:{
      firstName: '',
      lastName: '',
      gender: '',
      dob:'',
      email: props.data.email,
      phone:'',
      referCode:'',
      addressLine_1:'',
      addressLine_2:'',
      city:'',
      state:'',
      zipCode:''
    } as ICreateAccount,
    onSubmit:submitHandler,
    validationSchema: createAccountFormSchema
  });

  async function submitHandler(values: ICreateAccount) {
      //next line only for development remove before code push
      // props.handleNext();
    try {
      const data = {
        first_name: values.firstName,
        last_name: values.lastName,
        gender: values.gender,
        dob:values.dob,
        email: props.data.email,
        phone:values.phone,
        referCode:values.referCode,
        address1:values.addressLine_1,
        address2: values.addressLine_2,
        city:values.city,
        state:values.state,
        pin:values.zipCode
      }
      const response = await createAccount_api(data);
      console.log(response.data.message[0]);
      
      if(response.data.success){
        setUserData(response.data.message[0]);
        toast.success('Account created successfully.');
        props.handleNext();
      }
    } catch (error) {
      console.log(error);
      
    }finally{
    }
  }

  return (
    <Box display='flex' flexDirection='column' alignContent='center'sx={{minHeight:'calc( 100vh - 48px)'}} >
        <Box display='flex' alignItems='center' flexDirection='column'>
        <StepsHeader title='Create An Account' subTitle="Let's get started by creating an account for you"/>
          <Box sx={{width:{xl:'1130px', lg:'750px', md:'70%', sm:'60%', xs:'90%'}}} mt={{xl:'38px', lg:'20px',xs:'30px'}} >
            <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth>
                <label><Typography fontSize={{xl:'18px',xs:'12px'}} fontWeight='400' mb={{xl:'17px', lg:'10px',xs:'10px'}}>First Name &nbsp;<LuAsterisk size='0.7rem' style={{color:'#FF5016' }}  /></Typography></label>
                <TextField size='small' placeholder='Enter Here' 
                  name='firstName'
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.firstName && Boolean(errors.firstName)}
                  helperText={touched.firstName && errors.firstName?.toString()}
                />
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth>
              <label><Typography fontSize={{xl:'18px',xs:'12px'}} fontWeight='400' mb={{xl:'17px', lg:'10px',xs:'10px'}}>Last Name &nbsp;<LuAsterisk size='0.7rem' style={{color:'#FF5016' }}  /></Typography></label>
                <TextField size='small' placeholder='Enter Here'
                  name='lastName'
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.lastName && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName?.toString()}
                />
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth>
              <label><Typography fontSize={{xl:'18px',xs:'12px'}} fontWeight='400' mb={{xl:'17px', lg:'10px',xs:'10px'}}>Gender &nbsp;<LuAsterisk size='0.7rem' style={{color:'#FF5016' }}  /></Typography></label>
                <Select size='small'
                  name='gender'
                  value={values.gender}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.gender && Boolean(errors.gender)}
                >
                  <MenuItem value='male'>Male</MenuItem>
                  <MenuItem value='female'>Female</MenuItem>
                </Select>
                {touched.gender && Boolean(errors.gender) &&  <FormHelperText sx={{color: 'red'}}>{errors.gender?.toString()}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth>
              <label><Typography fontSize={{xl:'18px',xs:'12px'}} fontWeight='400' mb={{xl:'17px', lg:'10px',xs:'10px'}}>Date of Birth &nbsp;<LuAsterisk size='0.7rem' style={{color:'#FF5016' }}  /></Typography></label>
                <TextField size='small' type='date'
                  name='dob'
                  inputProps={{
                    max: new Date().toISOString().split('T')[0]
                  }}
                  value={values.dob}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.dob && Boolean(errors.dob)}
                  helperText={touched.dob && errors.dob?.toString()}
                />
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth>
              <label><Typography fontSize={{xl:'18px',xs:'12px'}} fontWeight='400' mb={{xl:'17px', lg:'10px',xs:'10px'}}>Email Address &nbsp;<LuAsterisk size='0.7rem' style={{color:'#FF5016' }}  /></Typography></label>
                <TextField size='small' placeholder='Enter Here'
                  name='email'
                  value={values.email}
                  onChange={handleChange}
                  disabled
                />
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth>
              <label><Typography fontSize={{xl:'18px',xs:'12px'}} fontWeight='400' mb={{xl:'17px', lg:'10px',xs:'10px'}}>Phone Number &nbsp;<LuAsterisk size='0.7rem' style={{color:'#FF5016' }}  /></Typography></label>
                <TextField size='small' placeholder='Enter Here'
                  name='phone'
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.phone && Boolean(errors.phone)}
                  helperText={touched.phone && errors.phone?.toString()}
                />
              </FormControl>
            </Grid>
            </Grid>
              <Typography fontSize={{xl:'24px', lg:'20px'}}  mt={{xs:'24px'}} mb={{xs:'23px'}} fontWeight='medium' m={{xl:'40px 0px 24px 0px', lg: '20px 0px 15px 0px'}} color='primary'>REFER CODE<Typography component='span' color='#6A6A6A' fontSize={{xl:'20px', lg:'14px'}}> ( IF ANY )</Typography></Typography>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <FormControl fullWidth>
              <label><Typography fontSize={{xl:'18px',xs:'12px'}} fontWeight='400' mb={{xl:'17px', lg:'10px',xs:'10px'}}>Refer Code &nbsp;{/* <LuAsterisk size='10px' style={{color:'#FF5016' }}  /> */}</Typography></label>
                  <TextField size='small' placeholder='Enter Here'
                    name='referCode'  
                    value={values.referCode}
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Typography fontSize={{xl:'24px', lg:'20px'}}  mt={{xs:'24px'}} mb={{xs:'23px'}} fontWeight='medium' m={{xl:'40px 0px 24px 0px', lg: '20px 0px 15px 0px'}} color='primary'>ADDRESS DETAILS</Typography>
            <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth>
              <label><Typography fontSize={{xl:'18px',xs:'12px'}} fontWeight='400' mb={{xl:'17px', lg:'10px',xs:'10px'}}>Address Line 1 &nbsp;<LuAsterisk size='0.7rem' style={{color:'#FF5016' }}  /></Typography></label>
                <TextField size='small' placeholder='Enter Here'
                  name='addressLine_1'
                  value={values.addressLine_1}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.addressLine_1 && Boolean(errors.addressLine_1)}
                  helperText={touched.addressLine_1 && errors.addressLine_1?.toString()}
                />
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth>
              <label><Typography fontSize={{xl:'18px',xs:'12px'}} fontWeight='400' mb={{xl:'17px', lg:'10px',xs:'10px'}}>Address Line 2 &nbsp;<LuAsterisk size='0.7rem' style={{color:'#FF5016' }}  /></Typography></label>
                <TextField size='small' placeholder='Enter Here'
                  name='addressLine_2'
                  value={values.addressLine_2}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth>
              <label><Typography fontSize={{xl:'18px',xs:'12px'}} fontWeight='400' mb={{xl:'17px', lg:'10px',xs:'10px'}}>City &nbsp;<LuAsterisk size='0.7rem' style={{color:'#FF5016' }}  /></Typography></label>
                <TextField size='small' placeholder='Enter Here'
                  name='city'
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.city && Boolean(errors.city)}
                  helperText={touched.city && errors.city?.toString()}
                />
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth>
              <label><Typography fontSize={{xl:'18px',xs:'12px'}} fontWeight='400' mb={{xl:'17px', lg:'10px',xs:'10px'}}>State &nbsp;<LuAsterisk size='0.7rem' style={{color:'#FF5016' }}  /></Typography></label>
                <Select size='small'
                  name='state'
                  value={values.state}
                  onChange={handleChange}
                  error={touched.state && Boolean(errors.state)}
                >
                  <MenuItem value='Maharastra'>Maharastra</MenuItem>
                  <MenuItem value='Banglore'>Banglore</MenuItem>
                </Select>
                {touched.state && Boolean(errors.state) &&  <FormHelperText sx={{color: 'red'}}>{errors.state?.toString()}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth>
              <label><Typography fontSize={{xl:'18px',xs:'12px'}} fontWeight='400' mb={{xl:'17px', lg:'10px',xs:'10px'}}>Zip Code &nbsp;<LuAsterisk size='0.7rem' style={{color:'#FF5016' }}  /></Typography></label>
                <TextField size='small' placeholder='Enter Here'
                  name='zipCode'
                  value={values.zipCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.zipCode && Boolean(errors.zipCode)}
                  helperText={touched.zipCode && errors.zipCode?.toString()}
                />
              </FormControl>
            </Grid>
            <Box display='flex' justifyContent='center' width='100%' sx={{mt:{xs:'49px',xl:'56px', lg:'35px'},mb:{xl:'74px',lg:'40px',sm:'40px'}}} pb={{xs:"36px" , sm:'0px'}}>
                <Button type='submit' variant='contained' sx={{width:'50%'}}>Next</Button>
            </Box>
            </Grid>
            </form>
          </Box>
      </Box>
    </Box>
  )
}

export default CreateAccountForm