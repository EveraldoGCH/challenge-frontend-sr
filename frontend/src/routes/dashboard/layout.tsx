import PageLayout from '@/components/layout/PageLayout/PageLayout'
import {
  createFileRoute,
  Outlet
} from '@tanstack/react-router'
import { DashboardProvider } from './context/DashboardContext'

export const Route = createFileRoute("/dashboard"
)({
  component: DashboardLayout,
})

function DashboardLayout() {
  return (
    <DashboardProvider>
      <PageLayout title="Inicio" subtitle="Resumen de las métricas">
        <Outlet />
      </PageLayout>
    </DashboardProvider>
  )
}
