import SideBar from '@/components/layout/SideBar/SideBar.tsx'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <SideBar>
        <Outlet />
      </SideBar>
      <TanStackRouterDevtools />
    </>
  ),
})
