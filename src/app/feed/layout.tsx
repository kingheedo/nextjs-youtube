import React from 'react'

interface FeedPageLayoutProps {
  children: React.ReactNode
}

const FeedPageLayout = ({ children }: FeedPageLayoutProps) => {
  return (
    <div>
      <div className='p-4 bg-rose-500 w-full'>
        i am a navbar
      </div>
      {children}
    </div>
  )
}

export default FeedPageLayout