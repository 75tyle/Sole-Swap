import React from 'react'
import { SidebarData } from './SidebarData'
import './Sidebar.css'

const Sidebar = (props) => {
  console.log(props)
  return (
    <div className='sidebar' id={props.sidebar === true ? "show": "hide"}>
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
