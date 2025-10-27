import { useGetMetrics } from '@/hooks/querys/metrics/get/useGetMetrics';
import { MetricsResponse } from '@/services/metrics/getMetricsService';
import { ReactNode } from 'react';
import { DashboardContext } from './useDashboardContext';

export interface DashboardContextType {
  metrics: MetricsResponse[] | undefined;
  isLoadingMetrics: boolean;
}

export const DashboardContextProvider = ({ children }: { children: ReactNode }) => {
  const { data: metrics, isLoading: isLoadingMetrics } = useGetMetrics()

  return (
    <DashboardContext.Provider value={{ metrics, isLoadingMetrics }}>
      {children}
    </DashboardContext.Provider>
  )
}
