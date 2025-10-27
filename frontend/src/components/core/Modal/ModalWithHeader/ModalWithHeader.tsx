import { colors } from '@/constants/colors'
import { Box, DialogProps, IconButton, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import {
  CloseContainer,
  IconContainer,
  ModalHeader,
  ModalRoot,
  ModalWrapper,
} from '../ModalStyles'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'

interface ModalProps extends DialogProps {
  onClose: () => void
  open: boolean
  subtitle?: string
  children: React.ReactNode
  hideCloseButton?: boolean
  icon?: React.ReactNode
}

export const ModalIconStructure = ({
  open = false,
  onClose,
  icon,
  children,
  hideCloseButton = false,
  title,
  subtitle,
  ...props
}: ModalProps) => {
  //BREAKPOINTS for maxWidth: xs=0px, sm=600px, md=900px, lg=1200px, xl=1536px
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
      onClose={handleClose}
      closeAfterTransition
    >
      <ModalWrapper>
        <ModalHeader>
          <Box display={'flex'} justifyContent={'space-between'}>
            <IconContainer>{icon}</IconContainer>
            <CloseContainer>
              {!hideCloseButton && (
                <IconButton aria-label="Close modal" onClick={onClose}>
                  <CloseOutlinedIcon />
                </IconButton>
              )}
            </CloseContainer>
          </Box>
          <Box display={'flex'} flexDirection={'column'} gap={'4px'}>
            <Typography variant="h2">{title}</Typography>
            {subtitle && (
              <Typography variant="body1" style={{ color: colors.greyDark }}>
                {subtitle}
              </Typography>
            )}
          </Box>
        </ModalHeader>
        {children}
      </ModalWrapper>
    </ModalRoot>
  )
}
