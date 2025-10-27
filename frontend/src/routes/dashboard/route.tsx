import PageLayout from '@/components/layout/PageLayout/PageLayout'
import { useGetMetrics } from '@/hooks/querys/metrics/get/useGetMetrics'
import { Box } from '@mui/material'
import { createFileRoute, FileRoutesByPath } from '@tanstack/react-router'
import ROUTES from '../../constants/allRoutes'
import { HomeCard } from './_components/HomeCard'

export const Route = createFileRoute(
  ROUTES.DASHBOARD as keyof FileRoutesByPath
)({
  component: Dashboard,
})

function Dashboard() {
  const { data: metrics, isLoading: isLoadingMetrics } = useGetMetrics()

  if (isLoadingMetrics) return <div className="p-4">Cargando métricas...</div>

  return (
    <PageLayout title="Inicio" subtitle="Resumen de las métricas">
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
    </PageLayout>
  )
}
