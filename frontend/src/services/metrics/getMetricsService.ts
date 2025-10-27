import axiosInstance from '@/utils/axiosInstance'

export enum MetricsRegions {
  US = 'US',
  EU = 'EU',
  LATAM = 'LATAM',
  APAC = 'APAC',
}

export interface MetricsResponse {
  [MetricsRegions.US]: {
    timestamp: string
    activeUsers: number
    newUsers: number
    revenue: number
    churnRate: number
  }
  [MetricsRegions.EU]: {
    timestamp: string
    activeUsers: number
    newUsers: number
    revenue: number
    churnRate: number
  }
  [MetricsRegions.LATAM]: {
    timestamp: string
    activeUsers: number
    newUsers: number
    revenue: number
    churnRate: number
  }
  [MetricsRegions.APAC]: {
    timestamp: string
    activeUsers: number
    newUsers: number
    revenue: number
    churnRate: number
  }
}

export const getMetricsService = async (): Promise<MetricsResponse[]> => {
  const response = await axiosInstance.get(`/metrics`)
  return response.data
}
