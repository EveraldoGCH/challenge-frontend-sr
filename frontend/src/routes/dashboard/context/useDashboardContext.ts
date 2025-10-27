import { createContext, useContext } from 'react'
import { DashboardContextType } from './DashboardContextProvider'

export const DashboardContext = createContext<DashboardContextType | undefined>(
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
