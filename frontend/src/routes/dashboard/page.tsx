import ROUTES from '@/constants/allRoutes'
import { Box } from '@mui/material'
import { createFileRoute, FileRoutesByPath } from '@tanstack/react-router'
import { HomeCard } from './_components/HomeCard'
import { useDashboardContext } from './context/useDashboardContext'

export const Route = createFileRoute(
  (ROUTES.DASHBOARD + '/') as keyof FileRoutesByPath
)({
  component: Dashboard,
})

function Dashboard() {
  const { metrics, isLoadingMetrics } = useDashboardContext()

  if (isLoadingMetrics) return <div className="p-4">Cargando métricas...</div>

  return (
    <>
      <Box className="flex w-full justify-between">
        <HomeCard
          title="Total de cobros"
          amount={metrics?.length}
          summedAmount={1000}
          isLoading={false}
        />
        <HomeCard
          title="Total de cobros"
          amount={metrics?.length}
          summedAmount={1000}
          isLoading={false}
        />
        <HomeCard
          title="Total de cobros"
          amount={metrics?.length}
          summedAmount={1000}
          isLoading={false}
        />
      </Box>
    </>
  )
}
