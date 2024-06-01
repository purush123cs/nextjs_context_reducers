"use client";

import React, { useState, useEffect, useContext } from 'react';
import { Context } from "@/context/context";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const { state, dispatch } = useContext(Context);
  const { registrationData } = state;
  const { firstName, lastName } = registrationData;

  const [mobileNumber, setMobileNumber] = useState('');
  //not sure about loading, it is copy paste
  const [loading, setLoading] = useState(false);
  //not sure about error message, it is copy paste
  const [errorMessage, setErrorMessage] = useState('');

  function handleMobileNumberChange(event: any) {
    setMobileNumber(event.target.value);
  }

  async function handleSignIn(event: any) {
    event.preventDefault();
    dispatch({
      type: "ENTER_NUMBER_SUBMIT",
      payload: mobileNumber,
    })
    router.push("/chooseAmount");
    setErrorMessage('');
    setLoading(true);
  }
  
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div>
        {firstName+" "+lastName}
      </div>
      <div className="lg:w-2/5 md:w-3/5 w-4/5">
        <label className="mt-6">Enter Number</label>
        <input
          type="text"
          className={`text-box`}
          placeholder=""
          value={mobileNumber}
          onChange={(e) => handleMobileNumberChange(e)}
        />
        <button
          type="submit"
          className="submit-btn mt-5 w-24"
          disabled={loading}
          onClick={(e) => handleSignIn(e)}
        >
          Submit
        </button>
        <p className="text-red-900">
          { errorMessage }
        </p>
      </div>
    </div>
    )
}