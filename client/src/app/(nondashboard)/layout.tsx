import React from 'react'
import { NAVBAR_HEIGHT } from '@/lib/constants'
import Navbar from '@/components/Navbar'
function layout({children} : {children: React.ReactNode}) {
  return (
    <div className='h-full w-full'>   
        <Navbar />
        <main className='w-full h-full flex flex-col '
        style={{paddingTop:`${NAVBAR_HEIGHT}px`}}>
            {children}
        </main>
    </div>
  )
}

export default layout