import * as Yup from 'yup';

export const createAccountFormSchema = Yup.object({
    firstName: Yup.string().required('First name required'),
    lastName: Yup.string().required('Last name required'),
    gender: Yup.string().required('gender name required'),
    dob: Yup.string().test('is-greater','Date of birth should be lesser than today.', (dob, schema) => {
      const today = new Date().toISOString().split('T')[0];
      if(dob && dob < today) return true
    }).required('DOB is required'),
    // email: Yup.string().required('Email required'),
    phone: Yup.string().required('Phone required').matches(/^(\+\d{1,3}[- ]?)?\d{10}$/,"Invalid phone number"
      ),
    addressLine_1: Yup.string().required('Address line required'),
    city: Yup.string().required('City required'),
    state: Yup.string().required('State required'),
    zipCode: Yup.string().required('Zip code required'),
})