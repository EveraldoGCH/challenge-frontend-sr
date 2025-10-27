import ROUTES from '@/constants/allRoutes'
import { MetricsRegions } from '@/services/metrics/getMetricsService'
import { sReturn } from '@/utils/text'
import { Tab, Tabs } from '@mui/material'
import { createFileRoute, FileRoutesByPath } from '@tanstack/react-router'
import { ChartContainerDashboard } from './-components/ChartContainerDashboard'
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

  return (
    <>
      <Tabs value={tab} onChange={handleChangeTab}>
        {Object.values(MetricsRegions).map((region, index) => (
          <Tab
            key={region + 'tab'}
            label={tabStatusMap[region]}
            value={region}
            {...tabProps(index)}
            disabled={isLoadingMetrics}
          />
        ))}
      </Tabs>
      <ChartContainerDashboard />
      <div className="flex w-full flex-wrap gap-6 lg:gap-4 lg:flex-row flex-col lg:justify-between">
        <HomeCard
          title={`Nuevo${sReturn(totalNewUsers ?? 0)} usuario${sReturn(totalNewUsers ?? 0)}`}
          value={totalNewUsers}
          isLoading={isLoadingMetrics}
        />
        <HomeCard
          title={`Ingresos totales`}
          amount={totalRevenue}
          isLoading={isLoadingMetrics}
        />
        <HomeCard
          title="Tasa de abandono"
          value={totalChurnRate}
          isLoading={isLoadingMetrics}
          type="percentage"
        />
      </div>
    </>
  )
}
