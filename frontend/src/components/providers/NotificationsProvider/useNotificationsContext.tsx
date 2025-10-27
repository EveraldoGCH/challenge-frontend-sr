import { createContext, useContext } from 'react'
import { NotificationsContextType } from './NotificationsContextProvider'

export const NotificationsContext = createContext<
  NotificationsContextType | undefined
>(undefined)

export const useNotificationsContext = () => {
  const context = useContext(NotificationsContext)
  if (context === undefined) {
    throw new Error(
      'useNotificationsContext must be used within a NotificationsProvider'
    )
  }
  return context
}
