import { colors } from '@/constants/colors'
import { ChildrenContainer, SideNavCont } from './SideBarStyles'

const SideBar = ({
  children,
  ...props
}: {
  children?: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <>
      <SideNavCont {...props}>
        <img
          src={'./src/assets/colppyLogo.svg'}
          alt="Logo"
          style={{ width: '128px', color: colors.primaryMain }}
        />
      </SideNavCont>
      <ChildrenContainer>{children}</ChildrenContainer>
    </>
  )
}

export default SideBar
