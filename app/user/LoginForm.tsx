'use client'

import React, { useState } from 'react'
import { supabase } from '@/utils/supabaseClient'

const LoginForm = () => {

  const [loading,setLoading] = useState(false)

  const handleSignUp = async () => {
    setLoading(true);

    const randomEmail = `${Math.random().toString(36).substring(7)}@example.com`
    const passoword = "b3kInyjVhJO5QN5"

    const {data, error} = await supabase.auth.signUp({
        email:randomEmail,
        password:passoword
    })

    if(error){
        console.error(error)
    }else{
        console.log("User created and logged in:",data)
    }
    setLoading(false);

  }

  return (
    <button
      onClick={handleSignUp}
      disabled={loading}
    >
      {loading ? "Signing up..." : "Sign up with random email and password"}
    </button>
  )
}

export default LoginForm