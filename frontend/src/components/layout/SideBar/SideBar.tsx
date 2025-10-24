import { colors } from '@/constants/colors'
import { ChildrenCont, SideNavCont } from './SideBarStyles'

const SideBar = ({
  children,
  ...props
}: {
  children?: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <SideNavCont {...props} elevation={1}>
        <img
          src={'./src/assets/colppyLogo.svg'}
          alt="Logo"
          style={{ width: '128px', color: colors.primaryMain }}
        />
      <ChildrenCont>{children}</ChildrenCont>
    </SideNavCont>
  )
}

export default SideBar
