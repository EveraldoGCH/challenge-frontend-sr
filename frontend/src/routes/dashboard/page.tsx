import ROUTES from '@/constants/allRoutes'
import { MetricsRegions } from '@/services/metrics/getMetricsService'
import { sReturn } from '@/utils/text'
import { Box, Tab, Tabs } from '@mui/material'
import { createFileRoute, FileRoutesByPath } from '@tanstack/react-router'
import { HomeCard } from './-components/HomeCard'
import { useDashboardContext } from './-context/useDashboardContext'

export const Route = createFileRoute(
  (ROUTES.DASHBOARD + '/') as keyof FileRoutesByPath
)({
  component: Dashboard,
})

function tabProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const tabStatusMap: Record<MetricsRegions, string> = {
  [MetricsRegions.US]: 'Estados Unidos',
  [MetricsRegions.EU]: 'Europa',
  [MetricsRegions.LATAM]: 'Latinoamérica',
  [MetricsRegions.APAC]: 'Asia',
}

function Dashboard() {
  const {
    isLoadingMetrics,
    tab,
    totalNewUsers,
    totalRevenue,
    totalChurnRate,
    handleChangeTab,
  } = useDashboardContext()

  if (isLoadingMetrics) return <div className="p-4">Cargando métricas...</div>
  //TODO: Add loading state

  return (
    <>
      <Tabs value={tab} onChange={handleChangeTab}>
        {Object.values(MetricsRegions).map((region, index) => (
          <Tab
            key={region + 'tab'}
            label={tabStatusMap[region]}
            value={region}
            {...tabProps(index)}
          />
        ))}
      </Tabs>
      <Box className="flex w-full justify-between">
        <HomeCard
          title={`Nuevo${sReturn(totalNewUsers ?? 0)} usuario${sReturn(totalNewUsers ?? 0)}`}
          value={totalNewUsers}
          isLoading={false}
        />
        <HomeCard
          title={`Ingresos totales`}
          amount={totalRevenue}
          isLoading={false}
        />
        <HomeCard
          title="Tasa de abandono"
          value={totalChurnRate}
          isLoading={false}
          type="percentage"
        />
      </Box>
    </>
  )
}
