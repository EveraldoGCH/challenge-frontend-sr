import { colors } from '@/constants/colors'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import SettingsIcon from '@mui/icons-material/Settings';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { Box, Stack } from '@mui/material'
import {
  ChildrenContainer,
  CustomButton,
  SideNavCont
} from './SideBarStyles'
import { SideBarItem } from './type'
import { ItemSideBar } from './components/ItemSideBar';

const sideBarItems: SideBarItem[] = [
  {
    icon: <HomeRoundedIcon  />,
    name: 'Inicio',
    onClick: () => { }
  }
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
          {sideBarItems.map((item) => (
            <ItemSideBar key={item.name + "item sidebar"} item={item} />
          ))}
        </Stack>
        <Box className="flex gap-2  w-full justify-end">
          <CustomButton isActive={true} onClick={() => {}}>
            <SettingsIcon sx={{ color: colors.textSecondary }} />
          </CustomButton>
          <CustomButton isActive={false} onClick={() => {}}>
            <ExitToAppIcon sx={{ color: colors.errorMain }} />
          </CustomButton>
        </Box>
      </SideNavCont>
      <ChildrenContainer>{children}</ChildrenContainer>
    </>
  )
}

export default SideBar
