import React from 'react'
import * as matIcons from '@material-ui/icons/'; 


export const SidebarData = [

    {

        title:'Home',
        path:'/',
        icon: <matIcons.DashboardRounded/>,
        cName:'nav-text'

    },
    {

        title:'System Health',
        path:'/health',
        icon: <matIcons.LocalHospitalRounded/>,
        cName:'nav-text'

    },
    {

        title:'Meta',
        path:'/meta',
        icon: <matIcons.CodeRounded/>,
        cName:'nav-text'

    },
    {

        title:'Settings',
        path:'/settings',
        icon: <matIcons.SettingsRounded/>,
        cName:'nav-text'

    },

]