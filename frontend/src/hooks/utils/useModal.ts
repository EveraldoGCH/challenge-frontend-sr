import { useCallback, useState } from 'react'

export const useModal = (openInitial: boolean = false) => {
  const [open, setOpen] = useState(openInitial)

  const onOpen = useCallback(() => {
    setOpen(true)
  }, [])

  const onClose = useCallback(() => {
    setOpen(false)
  }, [])

  return { open, onOpen, onClose }
}
