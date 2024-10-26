import Image from 'next/image'
import React from 'react'
import MailSignIn from '@/components/Mailsignin'

const page = () => {
  return (
    <div>
      <div className='w-fit m-auto flex flex-col items-center mt-[20vh] justify-between'>
        <Image width={41} height={41} alt="standard" src="./standard.svg" className='mx-auto mb-8' />
        <h1 className='text-3xl'>Your Paster Account</h1>
        <div className='mt-6'>
          <MailSignIn value={"Continue with Google"} img_icon={"/googleicon.svg"} />
          <MailSignIn value={"Continue with Apple"} img_icon={"/appleicon.svg"} />
          <MailSignIn value={"Continue with Discord"} img_icon={"/discordicon.svg"} />
          <button className={`flex items-center justify-center bg-white bg-opacity-15 hover:bg-blue-200 hover:bg-opacity-45 transition-all p-4 mt-4 rounded-md border w-80`}>
            Continue with Email
          </button>
        </div>
      </div>


    </div>
  )
}

export default page