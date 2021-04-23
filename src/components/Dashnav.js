import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import * as matIcons from '@material-ui/icons/'; 
import {SidebarData} from './SidebarData'
import '../styles/dashnav.css'
const Dashnav = () => {

    const [sidebar,setSidebar] = useState(false)
    const showsidebar = () => setSidebar(!sidebar)
    return (
        <>
        
        <div className="dashnavbar">
            <Link to="#" className="menu-bars">
                <matIcons.DehazeRounded style = {{color:"#4E4E4E"}} onClick={showsidebar}/>
            </Link>
        </div> 
    
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={showsidebar}>
                <li className="navbar-toggle">
                    <Link to="#" className="menu-bars">
                        <matIcons.CloseRounded style = {{color:"#4E4E4E"}}/>
                    </Link>
                </li>
                {SidebarData.map((item,index) => {
                    return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}

            </ul>
        </nav>  
        
       
        </>
    )
}

export default Dashnav
