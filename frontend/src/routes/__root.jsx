import SideBar from '@/components/layout/SideBar/SideBar.tsx'
import AllProviders from '@/components/providers/AllProviders'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <AllProviders>
      <SideBar>
        <Outlet />
      </SideBar>
      <TanStackRouterDevtools />
    </AllProviders>
  ),
})
