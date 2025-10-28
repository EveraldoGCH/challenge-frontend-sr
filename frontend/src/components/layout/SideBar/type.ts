export interface SideBarItem {
  icon: React.ReactNode
  name: string
  onClick: () => void
  path: string
  disabled?: boolean
}
