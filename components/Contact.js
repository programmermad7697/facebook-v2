import Image from 'next/image'
import React from 'react'

function Contact({ src, name }) {
  return (
    <div className="relative mb-2 flex cursor-pointer items-center space-x-3 rounded-xl p-2 hover:bg-gray-200">
      <Image
        className="rounded-full"
        src={src}
        objectFit="cover"
        layout="fixed"
        height={50}
        width={50}
      />
      <p>{name}</p>
      <div className="absolute bottom-2 left-7 h-3 w-3 rounded-full bg-green-400" />
    </div>
  )
}

export default Contact
