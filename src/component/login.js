import React from 'react';
import { useFormik, } from 'formik'; //handle form
import * as Yup from 'yup'; //validasi object di form
import axios from 'axios';
import { Router, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {login} from '../features/auth/auth-slice';


const handleSubmit = async (values, actions, dispatch, navigate) => {


  // using await in the axios call
//   try {
//     const response = await axios({
//       method: "POST",
//       url: "https://bootcamp-rent-car.herokuapp.com/customer/auth/login",
//       data: values,
//     })
//     actions.setSubmitting(false);
//     actions.resetForm();
//     // localStorage,
//     // State global lewat redux, respon.emailnya -> bisa
//     // Pindah halaman berhasil daftar
//     Router.push('/login');
//   } catch(error) {
//     actions.setSubmitting(false);
//     console.log(error);
//     alert(error.response.data.message);
//   }

//call action and reducer
const {email, password} = values;
dispatch(login({email, password}))
    .unwrap()
    .then(() => {
      console.log('sukses');
      navigate('/');
    })
    .catch(() => {
        console.log('error');
    })
};

 const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate  = useNavigate();

    const {isLoggedIn} = useSelector((state) => state.auth)

   const formik = useFormik({
     initialValues: {
       email: '',
       password : '',
     },
     validationSchema: Yup.object({
        password: Yup.string()
          .min(4, 'Harus lebih dari 4 karakter')
          .required('Tidak boleh kosong'),
        email: Yup.string().email('Invalid email address').required('Required'),
      }),
     onSubmit: (values, actions) => {
        handleSubmit(values, actions, dispatch, navigate)
     } ,
   });

   //actions.isSubmitting, actions.isValidating
   //menampilkan komponen loading ketika isSubmitting true

   if(isLoggedIn){
    console.log('udah login');
    }
   return (
    <form onSubmit={formik.handleSubmit}>
    <label htmlFor="email">Email Address</label>
    <input
      id="email"
      name="email"
      type="email"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.email}
    />
        {formik.touched.email && formik.errors.email ? (
      <div  style={{color: "red"}}  >{formik.errors.email}</div>
    ) : null}
    <br />
    <label htmlFor="Password">Password</label>
    <input
      id="password"
      name="password"
      type="password"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.password}
    />
    {formik.touched.password && formik.errors.password ? (
      <div  style={{color: "red"}}  >{formik.errors.password}</div>
    ) : null}
    <br />
    <button type="submit">Submit</button>
  </form>
   );
 };

export default LoginForm;