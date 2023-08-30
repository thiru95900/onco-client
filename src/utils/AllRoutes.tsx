// All navigations and pages code here
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import { HomePage } from '../pages';
import GetTest from '../pages/getTest/GetTest';
import GetTheTestStepper from '../pages/getTest/GetTheTestStepper';
import LoginPage from '../pages/auth/LoginPage';
import LoginOtp from '../pages/auth/LoginOtp';
import Profile from '../pages/profile/Profile';
import ContactUs from '../pages/contact-us/ContactUs';
import AboutUs from '../pages/aboutUs/AboutUs';
import Faq from '../pages/faq/Faq';
import Terms from '../pages/termsandcondition/Terms';
import PrivateRoute from '../components/privateRoute/PrivateRoute';
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        {/* <Route path='get-test' element={<GetTest/>}/> */}
        <Route path='login' element={<LoginPage/>}/>
        <Route path='verify-otp' element={<LoginOtp/>}/>
        <Route path='get-test' element={<GetTheTestStepper/>}/>
        <Route element={<PrivateRoute/>} >
          <Route path='profile' element={<Profile/>}/>
        </Route>
        <Route path='contact-us' element={<ContactUs/>}/>
        <Route path='about-us' element={<AboutUs/>}/>
        <Route path='faq' element={<Faq/>}/>
        <Route path='terms-and-conditions' element={<Terms/>}/>
      </Routes>
    </>
  )
}

export default AllRoutes