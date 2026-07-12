import React from 'react'

function NavItem({children,onClick}) {
  return (
    
       <li  onClick={onClick}className='list-none cursor-pointer'>
        <span className='group relative inline-block'>
            {children}
             <span 
        className='transition-all
        absolute
        h-[2px]
        w-0
        left-0
        -bottom-1
        bg-rose-400
        duration-300
        group-hover:w-full'
        />
        </span>
      </li>
    
  )
}

export default NavItem;