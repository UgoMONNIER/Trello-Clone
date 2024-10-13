import { SpaceContent } from './spaces/SpaceContent'
import SettingsIcon from '@mui/icons-material/Settings';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import { Tables } from './tables/Tables'
import { Columns } from './columns/Columns'

export const TabsRoutesDashboard =[
    

    {
        label:'Vos Espaces',
        component: <SpaceContent />,
        icon:<WorkspacesIcon/>
    },
    {
        label:'Paramètres',
        component: <h1>Paramètres</h1>,
        icon: <SettingsIcon/>
    }
    
    
]


export const TabsRoutesDashboardTables =[
    {
        label:'Vos Tableaux',
        component: <Tables />,
        icon:<WorkspacesIcon/>
    },
    {
        label:'Paramètres',
        component: <h1>Paramètres</h1>,
        icon: <SettingsIcon/>
    }
    
    
]

export const TabsRoutesDashboardColumns =[
    
    {
        label:'Columns',
        component: <Columns sx={{padding:"90px"}}/>,
        icon:<WorkspacesIcon/>
    },
    {
        label:'Paramètres',
        component: <h1>Paramètres</h1>,
        icon: <SettingsIcon/>
    }
    
    
]