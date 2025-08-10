'use client'

import React from 'react'

import { Button } from '@/components/ui/button'
import { UserCircleIcon } from 'lucide-react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const DotIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </svg>
  )
}


const AuthButton = () => {
  return (

    <>
      <SignedOut>
        <SignInButton mode='modal'>
          <Button
            variant='outline'
            className='px-4 py-2 text-sm text-blue-600 hover:text-blue-500
        border-blue-500/2 rounded-full shadow-none
      '
          >
            <UserCircleIcon />
            Sign in
          </Button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton>
          <UserButton.MenuItems>
            <UserButton.Action
              label="Open chat"
              labelIcon={<DotIcon />}
              onClick={() => alert('init chat')}
            />
          </UserButton.MenuItems>
        </UserButton>
      </SignedIn>
    </>

  )
}

export default AuthButton