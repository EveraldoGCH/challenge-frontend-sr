import PageLayout from '@/components/layout/PageLayout/PageLayout'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import { DashboardContextProvider } from './context/DashboardContextProvider'

export const Route = createFileRoute('/dashboard')({
  component: DashboardLayout,
})

function DashboardLayout() {
  return (
    <DashboardContextProvider>
      <PageLayout title="Inicio" subtitle="Resumen de las métricas">
        <Outlet />
      </PageLayout>
    </DashboardContextProvider>
  )
}
