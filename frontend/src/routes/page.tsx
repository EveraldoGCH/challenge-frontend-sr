import {
  createFileRoute,
  FileRoutesByPath,
  Navigate,
} from '@tanstack/react-router'
import ROUTES from '../constants/allRoutes'

export const Route = createFileRoute(
  ROUTES.MAIN_ROUTE as keyof FileRoutesByPath
)({
  component: () => <Navigate to={ROUTES.LOGIN} />,
})
