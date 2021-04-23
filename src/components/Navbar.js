import React, {useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Avatar} from '@material-ui/core'
import "../styles/navbar.css"
import { selectSignedIn,selectUserData,setInput,setSignedIn,setUserData } from '../features/userSlice'
import { GoogleLogout } from 'react-google-login'
import ushurlogo  from '../assets/ushurlogo.png'
import {Link} from 'react-router-dom'
import * as matIcons from '@material-ui/icons/'; 
import {SidebarData} from './SidebarData'
import Dashnav from './Dashnav'


const Navbar = () => {

    const [inputValue,setInputValue] = useState("")
    const isSignedIn = useSelector(selectSignedIn)
    const userData = useSelector(selectUserData)
    const dispatch = useDispatch();

    const logout = (response) => {
        dispatch(setSignedIn(false))
        dispatch(setUserData(null));

    }
    const [sidebar,setSidebar] = useState(false)
    const showsidebar = () => setSidebar(!sidebar)

    return (
       <>
       
        
       <Dashnav/>
        <div className="navbar">
        
            <img src={ushurlogo} className="navbar__brand"/>
            {isSignedIn && 
            <div className="blog__search">
                <input 
                    className="search" 
                    placeholder="Search here" 
                    value={inputValue} 
                    onChange={(e)=> setInputValue(e.target.value)}
                    
                />
                
            
            </div> }

            {isSignedIn ? <div className="navbar__user__data">

                <Avatar src={userData?.imageUrl} alt={userData?.name}/>
                
                <h2 className="signedIn">{userData?.givenName}</h2>
                <GoogleLogout
                
                clientId="985279736458-h6ll8paph5133fu3bchlucft8pl6fc3u.apps.googleusercontent.com"
                render = {(renderProps) => (
                    <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="logout__button"
                    >
                        Logout
                    </button>

                )}
               
                onLogoutSuccess={logout}


                />

            </div> : ""}
            
          
        </div>
        </>
    )
}

export default Navbar
