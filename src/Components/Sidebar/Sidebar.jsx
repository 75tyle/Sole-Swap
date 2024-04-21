import React from 'react'
import { SidebarData } from './SidebarData'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <ul className='sidebar_list'>
            {SidebarData.map((val,key)=>{
            return (
                <li key={key}
                id={window.location.pathname === val.link ? "active" : ""}
                 onClick={()=>{window.location.pathname = val.link}}>
                    <div>{val.icon}</div>
                    <div>{val.title}</div>
                </li>
            );
        })}
        </ul>
    </div>
  )
}

export default Sidebar
