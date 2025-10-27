import { createContext, useContext, ReactNode } from 'react'

interface DashboardContextType {
  // Agrega aquí las propiedades que necesites compartir
  // Por ejemplo:
  // metrics: MetricsType;
  // refreshMetrics: () => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined
)

export const useDashboardContext = () => {
  const context = useContext(DashboardContext)
  if (context === undefined) {
    throw new Error(
      'useDashboardContext must be used within a DashboardProvider'
    )
  }
  return context
}

interface DashboardProviderProps {
  children: ReactNode
}

export const DashboardProvider = ({ children }: DashboardProviderProps) => {
  // Aquí puedes agregar la lógica del contexto
  const value: DashboardContextType = {
    // Agrega los valores que necesites
  }

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  )
}
