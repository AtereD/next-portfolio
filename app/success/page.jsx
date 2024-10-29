import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SuccessMessage = () => {
  return (
    <div className="container relative w-full h-full mb-20 bg-no-repeat bg-cover bg-success">
        <div className="flex flex-col items-center justify-center text-center gap-y-5">
          <Image src={'/assests/thumb.png'} width={128} height={128} alt="otp-verification"/>
          <h3 className="text-2xl">
            Thank you for dropping a message! <br /> I will get back to you soon.
          </h3>
          
          <button className="flex items-center p-5 dark:text-white dark:border-[#eece1a] border border-[#5651e5]">
            <Link href="/">Home</Link>
          </button>
        </div>
    </div>
  )
}

export default SuccessMessage