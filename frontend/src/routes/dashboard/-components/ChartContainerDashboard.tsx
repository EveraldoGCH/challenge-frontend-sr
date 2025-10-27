'use client'
import { Card } from '@/components/core/Card/Card'
import { Chart } from '@/components/widgets/Chart/Chart'
import dayjs from 'dayjs'
import { useDashboardContext } from '../-context/useDashboardContext'
import { MetricsData } from '@/services/metrics/getMetricsService'

const formatChartData = (data: MetricsData[] | undefined) => {
  return data?.map((item: MetricsData) => ({
    name: dayjs(item.timestamp).format('DD/MM'), //X AXIS
    value: item.activeUsers, //Y AXIS
  }))
}

export function ChartContainerDashboard(): React.JSX.Element {
  const { metricsData, isLoadingMetrics } = useDashboardContext()
  let formattedResponse = formatChartData(metricsData)

  return (
    <Card
      stack
      height="calc(100vh - 400px)"
      title="Evolución de usuarios activos"
    >
      <Chart data={formattedResponse || []} loadingData={isLoadingMetrics} />
    </Card>
  )
}
