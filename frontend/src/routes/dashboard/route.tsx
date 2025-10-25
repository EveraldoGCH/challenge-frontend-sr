import { createFileRoute, FileRoutesByPath } from '@tanstack/react-router'
import ROUTES from '../../constants/allRoutes'
import { useEffect, useRef, useState } from 'react'
import PageLayout from '@/components/layout/PageLayout/PageLayout'
import { Box } from '@mui/material'
import { HomeCard } from './_components/HomeCard'

export const Route = createFileRoute(
  ROUTES.DASHBOARD as keyof FileRoutesByPath
)({
  component: Dashboard,
})

function Dashboard() {
  const [metrics, setMetrics] = useState<any[] | undefined>(undefined)
  const hasFetched = useRef(false)

  useEffect(() => {
    const fetchMetrics = async () => {
      const res = await fetch('http://localhost:4000/metrics')
      const data = await res.json()
      if (!hasFetched.current) {
        // console.log("Datos recibidos:", data);
        hasFetched.current = true
      }
      setMetrics(data)
    }
    fetchMetrics()
    const interval = setInterval(fetchMetrics, 5000)
    return () => clearInterval(interval)
  }, [])

  if (!metrics || metrics.length === 0)
    return <div className="p-4">Cargando métricas...</div>

  return (
    <PageLayout title="Inicio">
      <>
        <Box className="flex w-full justify-between">
          <HomeCard
            title="Total de cobros"
            amount={metrics.length}
            summedAmount={1000}
            isLoading={false}
          />
          <HomeCard
            title="Total de cobros"
            amount={metrics.length}
            summedAmount={1000}
            isLoading={false}
          />
          <HomeCard
            title="Total de cobros"
            amount={metrics.length}
            summedAmount={1000}
            isLoading={false}
          />
        </Box>
      </>
    </PageLayout>
  )
}
