import { DialogProps } from '@mui/material'
import React, { useEffect } from 'react'
import { ModalRoot, ModalWrapper } from '../ModalStyles'

interface ModalProps extends DialogProps {
  onClose: () => void
  open: boolean
  children: React.ReactNode
  wrapperPading?: string
  wrapperStyles?: React.CSSProperties
}

export const ModalBase = ({
  open = false,
  onClose,
  children,
  wrapperPading,
  wrapperStyles,
  ...props
}: ModalProps) => {
  //BREAKPOINTS for maxWidth: xs=0px, sm=600px, md=985px, lg=1200px, xl=1536px
  const handleClose: DialogProps['onClose'] = (_, reason) => {
    if (reason && reason === 'backdropClick') onClose()
  }

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        onClose()
      }
    }

    if (open) {
      window?.addEventListener('keyup', handleKeyUp)
    }

    return () => {
      window?.removeEventListener('keyup', handleKeyUp)
    }
  }, [open, onClose])

  return (
    <ModalRoot
      {...props}
      open={open}
      closeAfterTransition
      onClose={handleClose}
    >
      <ModalWrapper
        style={{
          padding: wrapperPading ?? 24,
          ...wrapperStyles,
        }}
      >
        {children}
      </ModalWrapper>
    </ModalRoot>
  )
}
