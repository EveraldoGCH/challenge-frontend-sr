import ROUTES from '@/constants/allRoutes'
import { Box, Tab, Tabs, styled } from '@mui/material'
import { createFileRoute, FileRoutesByPath } from '@tanstack/react-router'
import { HomeCard } from './_components/HomeCard'
import { useDashboardContext } from './_context/useDashboardContext'
import { colors } from '@/constants/colors'
import { useState } from 'react'
import { MetricsRegions } from '@/services/metrics/getMetricsService'

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
  const [tab, setTab] = useState<number>(0)
  const { metrics, isLoadingMetrics } = useDashboardContext()

  const handleChangeTab = (_: React.SyntheticEvent, newTab: number) => {
    setTab(newTab)
  }

  if (isLoadingMetrics) return <div className="p-4">Cargando métricas...</div>

  return (
    <>
      <CustomTabs
        value={tab}
        onChange={handleChangeTab}
        style={{ fontVariant: 'h1' }}
      >
        {Object.values(MetricsRegions).map((region, index) => (
          <CustomTab
            key={region + 'tab'}
            label={tabStatusMap[region]}
            {...tabProps(index)}
          />
        ))}
        {/* <CustomTab label="Pendientes" {...tabProps(0)} />
        <CustomTab label="Completados" {...tabProps(1)} />
        <CustomTab label="Rechazados" {...tabProps(2)} />
        <CustomTab label="Rechazados" {...tabProps(3)} /> */}
      </CustomTabs>
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

const CustomTabs = styled(Tabs)`
  & .MuiTabs-scroller {
    & .MuiTabs-flexContainer {
    }
  }
  & .MuiTabs-indicator {
  }
`

const CustomTab = styled(Tab)`
  &.Mui-selected {
    color: ${colors.textPrimary};
  }
`
