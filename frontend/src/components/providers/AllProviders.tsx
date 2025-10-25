'use client'
import MaterialUIThemeProvider from './MaterialUIThemeProvider'
import React from 'react'

export default function AllProviders({
  children,
}: {
  children: React.ReactNode
}) {
  //   const [queryClient] = useState(
  //     () =>
  //       new QueryClient({
  //         defaultOptions: {
  //           queries: {
  //             refetchOnWindowFocus: false,
  //             refetchOnMount: false,
  //             retry: 2,
  //           },
  //         },
  //       }),
  //   );

  return <MaterialUIThemeProvider>{children}</MaterialUIThemeProvider>
}
