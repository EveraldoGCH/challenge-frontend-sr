import axiosInstance from '@/utils/axiosInstance'

export interface MetricsResponse {
  timestamp: string
  activeUsers: number
  newUsers: number
  revenue: number
  churnRate: number
  byRegion: {
    US: number
    EU: number
    LATAM: number
    APAC: number
  }
}

export const getMetricsService = async (): Promise<MetricsResponse[]> => {
  const response = await axiosInstance.get(`/metrics`)
  return response.data
}
