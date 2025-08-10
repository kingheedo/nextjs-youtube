import React from 'react'

import { Button } from '@/components/ui/button'
import { UserCircleIcon } from 'lucide-react'

const AuthButton = () => {
  return (
    <Button
      variant='outline'
      className='px-4 py-2 text-sm text-blue-600 hover:text-blue-500
        border-blue-500/2 rounded-full shadow-none
      '
    >
      <UserCircleIcon />
      Sign in
    </Button>
  )
}

export default AuthButton