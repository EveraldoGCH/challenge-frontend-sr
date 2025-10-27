import axiosInstance from '@/utils/axiosInstance'

export enum MetricsRegions {
  US = 'US',
  EU = 'EU',
  LATAM = 'LATAM',
  APAC = 'APAC',
}

export interface MetricsData {
  timestamp: string
  activeUsers: number
  newUsers: number
  revenue: number
  churnRate: number
}

export interface MetricsResponse {
  [MetricsRegions.US]: MetricsData
  [MetricsRegions.EU]: MetricsData
  [MetricsRegions.LATAM]: MetricsData
  [MetricsRegions.APAC]: MetricsData
  updatedAt?: string
}

export const getMetricsService = async (): Promise<MetricsResponse[]> => {
  const response = await axiosInstance.get(`/metrics`)
  return response.data
}
