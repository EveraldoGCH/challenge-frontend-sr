import ROUTES from '@/constants/allRoutes'
import { colors } from '@/constants/colors'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import SettingsIcon from '@mui/icons-material/Settings'
import { Box, Stack } from '@mui/material'
import { ItemSideBar } from './components/ItemSideBar'
import { ChildrenContainer, SideNavCont } from './SideBarStyles'
import { SideBarItem } from './type'

const sideBarItemsBlock1: SideBarItem[] = [
  {
    icon: <HomeRoundedIcon />,
    name: 'Inicio',
    onClick: () => {},
    path: ROUTES.DASHBOARD,
  },
]

const sideBarItemsBlock2: SideBarItem[] = [
  {
    icon: <SettingsIcon />,
    name: 'Configuración',
    onClick: () => {},
    path: ROUTES.SETTINGS,
  },
  {
    icon: <ExitToAppIcon color="error" />,
    name: 'Salir',
    onClick: () => {},
    path: '',
  },
]

const SideBar = ({
  children,
  ...props
}: {
  children?: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <>
      <SideNavCont {...props}>
        <Stack gap={'24px'}>
          <div className="flex items-center w-full">
            <img
              src={'./src/assets/colppyLogo.svg'}
              alt="Logo"
              style={{ width: '128px', color: colors.primaryMain }}
            />
          </div>
          {sideBarItemsBlock1.map(item => (
            <ItemSideBar key={item.name + 'item sidebar'} item={item} />
          ))}
        </Stack>
        <Box className="flex gap-2  w-full flex-col">
          {sideBarItemsBlock2.map(item => (
            <ItemSideBar key={item.name + 'item sidebar'} item={item} />
          ))}
        </Box>
      </SideNavCont>
      <ChildrenContainer>{children}</ChildrenContainer>
    </>
  )
}

export default SideBar
