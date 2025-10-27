import ROUTES from '@/constants/allRoutes'
import { colors } from '@/constants/colors'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import SettingsIcon from '@mui/icons-material/Settings'
import { Box, Stack, useMediaQuery, useTheme } from '@mui/material'
import { useMemo } from 'react'
import { ItemSideBar } from './components/ItemSideBar'
import { ChildrenContainer, SideNavCont } from './SideBarStyles'
import { SideBarItem } from './type'
import logoSmall from '@/public/images/colppySmall.jpg'
import logo from '@/public/images/colppyLogo.svg'
import { useNotificationsContext } from '@/components/providers/NotificationsProvider/useNotificationsContext'

const sideBarItemsBlock1: SideBarItem[] = [
  {
    icon: <HomeRoundedIcon />,
    name: 'Inicio',
    onClick: () => {},
    path: ROUTES.DASHBOARD,
  },
]

const SideBar = ({
  children,
  ...props
}: {
  children?: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>) => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const { modalNotify } = useNotificationsContext()
  const sideBarItemsBlock2: SideBarItem[] = useMemo(
    () => [
      {
        icon: <SettingsIcon />,
        name: 'Configuración',
        onClick: () => {},
        path: ROUTES.SETTINGS,
      },
      {
        icon: <ExitToAppIcon color="error" />,
        name: 'Salir',
        onClick: () =>
          modalNotify({
            title: 'Salir',
            message: '¿Estás seguro de querer salir?',
            variant: 'error',
            button1: {
              text: 'Salir',
              onClick: () => {},
            },
            button2: {
              text: 'Cancelar',
              onClick: () => {},
            },
          }),
        path: '',
      },
    ],
    [modalNotify]
  )

  return (
    <>
      <SideNavCont {...props}>
        <Stack gap={'24px'}>
          <div className="flex items-center w-full">
            {isSmallScreen ? (
              <img
                src={logoSmall}
                alt="Logo"
                style={{ width: '48px', color: colors.primaryMain }}
              />
            ) : (
              <img
                src={logo}
                alt="Logo"
                style={{ width: '128px', color: colors.primaryMain }}
              />
            )}
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
