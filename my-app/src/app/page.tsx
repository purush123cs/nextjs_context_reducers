"use client";

import React, { useState, useEffect, useContext } from 'react';
import { Context } from "@/context/context";
import { useRouter } from "next/navigation";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function Page() {
  const router = useRouter();
  const { state, dispatch } = useContext(Context);

  const handleSubmit = async (
    values: { [x: string]: string }
  ) => {
    const { firstName, lastName, email } = values;

    const response = await fetch(`/api/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName, lastName, email
      }),
    });

    const responseObj = await response.json();
    console.log('responseObj in client component to be viewed in browser console: ', responseObj);

    if (responseObj.error) {
      //TBD      
      
    } else {
      dispatch({
        type: "REGISTRATION_DATA",
        payload: {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
        },
      });
      router.push("/chooseAmount");
    }
  };
  
  return (
    <div className="flex flex-col ml-24 mt-9">
      <Formik
       initialValues={{ firstName: '', lastName: '', email: '' }}
       validationSchema={Yup.object({
         firstName: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
         lastName: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
         email: Yup.string().email('Invalid email address').required('Required'),
       })}
       onSubmit={(values) => {
        handleSubmit(values);
        
       }}
     >
       <Form>
        <div>
          <b>Registration</b>
        </div>
        <div className="mt-5">
          <div>
          <label htmlFor="firstName">First Name</label>
          </div>
          <div> 
          <Field className={`text-box`} name="firstName" type="text" />
          </div>
          <div>
          <ErrorMessage name="firstName" />
          </div>
        </div>

        <div className="mt-5">
          <div>  
          <label htmlFor="lastName">Last Name</label>
          </div>
          <div>
          <Field className={`text-box`} name="lastName" type="text" />
          </div>
          <div>
          <ErrorMessage name="lastName" />
          </div>
        </div>

        <div className="mt-5">
         <div> 
         <label htmlFor="email">Email Address</label>
         </div>
         <div>
         <Field className={`text-box`} name="email" type="email" />
         </div>
         <div>
          <ErrorMessage name="email" />
         </div>
        </div>
         
        <button className="submit-btn mt-5 w-24" type="submit">Submit</button>
       </Form>
     </Formik>
    </div>
    )
}