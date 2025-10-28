import ROUTES from '@/constants/allRoutes'
import { SideBarItem } from '../type'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import GroupRoundedIcon from '@mui/icons-material/GroupRounded'
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded'
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'

export const sideBarItemsBlock1: SideBarItem[] = [
  {
    icon: <HomeRoundedIcon />,
    name: 'Inicio',
    onClick: () => {},
    path: ROUTES.DASHBOARD,
    disabled: false,
  },
  {
    icon: <GroupRoundedIcon />,
    name: 'Usuarios',
    onClick: () => {},
    path: '',
    disabled: true,
  },
  {
    icon: <CategoryRoundedIcon />,
    name: 'Categorías',
    onClick: () => {},
    path: '',
    disabled: true,
  },
  {
    icon: <CalendarMonthRoundedIcon />,
    name: 'Calendario',
    onClick: () => {},
    path: '',
    disabled: true,
  },
  {
    icon: <EmailRoundedIcon />,
    name: 'Recordatorios',
    onClick: () => {},
    path: '',
    disabled: true,
  },
]
