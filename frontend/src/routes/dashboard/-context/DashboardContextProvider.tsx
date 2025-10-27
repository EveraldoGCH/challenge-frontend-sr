import { useGetMetrics } from '@/hooks/querys/metrics/get/useGetMetrics'
import {
  MetricsData,
  MetricsRegions,
  MetricsResponse,
} from '@/services/metrics/getMetricsService'
import { ReactNode, useMemo, useState } from 'react'
import { DashboardContext } from './useDashboardContext'

export interface DashboardContextType {
  metricsResponse: MetricsResponse[] | undefined
  isLoadingMetrics: boolean
  tab: MetricsRegions
  handleChangeTab: (event: React.SyntheticEvent, newTab: MetricsRegions) => void
  metricsData: MetricsData[] | undefined
  activeUsersByRegion: number | undefined
  totalRevenue: number | undefined
  totalNewUsers: number | undefined
  totalChurnRate: number | undefined
}

export const DashboardContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const { data: metricsResponse, isLoading: isLoadingMetrics } = useGetMetrics()
  const [tab, setTab] = useState<MetricsRegions>(MetricsRegions.US)

  const handleChangeTab = (_: React.SyntheticEvent, newTab: MetricsRegions) => {
    setTab(newTab)
  }

  const metricsData: MetricsData[] | undefined = useMemo(
    () => metricsResponse?.map(metric => metric[tab]),
    [metricsResponse, tab]
  )

  const activeUsersByRegion = useMemo(() => {
    return metricsData?.reduce((acc, metric) => acc + metric.activeUsers, 0)
  }, [metricsData])

  const totalRevenue = useMemo(() => {
    return metricsData?.reduce((acc, metric) => acc + metric.revenue, 0)
  }, [metricsData])

  const totalNewUsers = useMemo(() => {
    return metricsData?.reduce((acc, metric) => acc + metric.newUsers, 0)
  }, [metricsData])

  const totalChurnRate = useMemo(() => {
    return metricsData?.reduce((acc, metric) => acc + metric.churnRate, 0)
  }, [metricsData])

  return (
    <DashboardContext.Provider
      value={{
        isLoadingMetrics,
        tab,
        metricsData,
        metricsResponse,
        activeUsersByRegion,
        totalRevenue,
        totalNewUsers,
        totalChurnRate,
        handleChangeTab,
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}
