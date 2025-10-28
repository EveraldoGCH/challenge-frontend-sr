import SideBar from '@/components/layout/SideBar/SideBar.tsx'
import AllProviders from '@/components/providers/AllProviders'
import { createRootRoute, Outlet, useLocation } from '@tanstack/react-router'
import ROUTES from '@/constants/allRoutes'

const routesWithoutSideBar = [ROUTES.LOGIN]

const isRouteWithoutSideBar = pathname => {
  return routesWithoutSideBar.includes(pathname)
}

const RootComponent = () => {
  const { pathname } = useLocation()

  return (
    <AllProviders>
      {isRouteWithoutSideBar(pathname) ? (
        <Outlet />
      ) : (
        <SideBar>
          <Outlet />
        </SideBar>
      )}
      {/* <TanStackRouterDevtools /> */}
    </AllProviders>
  )
}

export const Route = createRootRoute({
  component: RootComponent,
})
