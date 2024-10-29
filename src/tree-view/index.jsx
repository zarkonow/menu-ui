import React from 'react'
import MenuList from './menu-list'

export default function TreeView({menus = []}) {



  return (
    <div className='tree-veiw-container'>
        <MenuList list={menus}/>
    </div>
  )
}
