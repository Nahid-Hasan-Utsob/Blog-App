import React from 'react'

export default function Bookmark({bookmarkData}) {

     const {title} = bookmarkData;

      
  return (
       <div >
        <p className='font-semibold tracking-wide text-[18px] border py-3 px-5 rounded-lg border-gray-400 my-3 w-full'>{title}</p>
      </div>
  )
}
