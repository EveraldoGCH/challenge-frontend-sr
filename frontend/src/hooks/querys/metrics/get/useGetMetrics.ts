import { getMetricsService } from "@/services/metrics/getMetricsService";
import { useQuery } from "@tanstack/react-query";


export const useGetMetrics = () =>
  useQuery({
    queryKey: ["metrics"],
      queryFn: getMetricsService,
    refetchInterval: 5000,
  });
