import Image from 'next/image'
import React from 'react'
import { signIn } from 'next-auth/client'

function Login() {
  return (
    <div className="grid place-items-center">
      <Image
        src={'https://links.papareact.com/t4i'}
        height={400}
        width={400}
        objectFit="contain"
      />

      <h1
        className="cursor-pointer rounded-full bg-blue-500 p-5 text-center text-white"
        onClick={signIn}
      >
        Login with Facebook
      </h1>
    </div>
  )
}

export default Login
