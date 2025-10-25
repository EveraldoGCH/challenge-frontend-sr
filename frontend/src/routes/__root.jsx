import SideBar from '@/components/layout/SideBar/SideBar.tsx'
import AllProviders from '@/components/providers/AllProviders'
import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <AllProviders>
      <SideBar>
        <Outlet />
      </SideBar>
      {/* <TanStackRouterDevtools /> */}
    </AllProviders>
  ),
})
