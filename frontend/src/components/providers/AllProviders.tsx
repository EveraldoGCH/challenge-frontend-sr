'use client'
import MaterialUIThemeProvider from './MaterialUIThemeProvider'
import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NotificationsContextProvider } from './NotificationsProvider/NotificationsContextProvider'

export default function AllProviders({
  children,
}: {
  children: React.ReactNode
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            retry: 2,
          },
        },
      })
  )

  return (
    <MaterialUIThemeProvider>
      <NotificationsContextProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </NotificationsContextProvider>
    </MaterialUIThemeProvider>
  )
}
