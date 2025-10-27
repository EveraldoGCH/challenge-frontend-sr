import axiosInstance from '@/utils/axiosInstance'

export interface MetricsResponse {
   US: {
    timestamp: string
    activeUsers: number
    newUsers: number
    revenue: number
    churnRate: number
   }
   EU: {
    timestamp: string
    activeUsers: number
    newUsers: number
    revenue: number
    churnRate: number
   }
   LATAM: {
    timestamp: string
    activeUsers: number
    newUsers: number
    revenue: number
    churnRate: number
   }
   APAC: {
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
