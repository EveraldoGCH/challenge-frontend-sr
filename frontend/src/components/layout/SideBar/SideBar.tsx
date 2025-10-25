import { colors } from '@/constants/colors'
import {
  ButtonContainer,
  ChildrenContainer,
  CustomButton,
  SideNavCont,
} from './SideBarStyles'
import { Box } from '@mui/material'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import SettingsIcon from '@mui/icons-material/Settings'

const SideBar = ({
  children,
  ...props
}: {
  children?: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <>
      <SideNavCont {...props}>
        <Box>
          <div className="flex items-center w-full">
            <img
              src={'./src/assets/colppyLogo.svg'}
              alt="Logo"
              style={{ width: '128px', color: colors.primaryMain }}
            />
          </div>
        </Box>
        <ButtonContainer>
          <CustomButton isActive={true} onClick={() => {}}>
            <SettingsIcon />
          </CustomButton>
          <CustomButton isActive={false} onClick={() => {}}>
            <ExitToAppIcon />
          </CustomButton>
        </ButtonContainer>
      </SideNavCont>
      <ChildrenContainer>{children}</ChildrenContainer>
    </>
  )
}

export default SideBar
