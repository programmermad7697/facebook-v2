import Image from 'next/image'
import React from 'react'
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/solid'
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline'
import Link from 'next/link'
import HeaderIcon from './HeaderIcon'
import { signOut, useSession } from 'next-auth/client'

function Header() {
  const [session] = useSession()

  return (
    <div className="sticky top-0 z-50 flex items-center bg-white p-2 shadow-md lg:px-5">
      {/* Left */}
      <div className="flex items-center">
        <Link href={'/'}>
          <Image
            className="cursor-pointer"
            src="https://links.papareact.com/5me"
            width={40}
            height={40}
            layout="fixed"
          />
        </Link>

        <div className="ml-2 hidden items-center rounded-full bg-gray-100 p-2 md:inline-flex">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="ml-2 hidden flex-shrink bg-transparent placeholder-gray-500 outline-none lg:inline-flex"
          />
        </div>
      </div>

      {/* Center */}
      <div className="flex flex-grow justify-center">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon Icon={HomeIcon} active />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center justify-end sm:space-x-2">
        <Image
          onClick={signOut}
          className="cursor-pointer rounded-full"
          src={session.user.image}
          width="40"
          height="40"
          layout="fixed"
        />

        <p className="hidden whitespace-nowrap pr-3 text-sm font-semibold lg:inline-flex">
          {session.user.name}
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  )
}

export default Header
