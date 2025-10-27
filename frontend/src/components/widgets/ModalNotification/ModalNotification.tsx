import { colors } from '@/constants/colors'
import { Box, Button, Stack, styled, Typography } from '@mui/material'
import { ReactNode } from 'react'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined'
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import { ModalBase } from '@/components/core/Modal/ModalBase/ModalBase'

type VariantColors = 'success' | 'warning' | 'error' | 'delete'

const variantColorsFirstColor: Record<VariantColors, string> = {
  success: colors.successLight,
  warning: colors.warningLight,
  error: colors.errorLight,
  delete: colors.errorLight,
}

const variantColorsSecondColor: Record<VariantColors, string> = {
  success: colors.successLighter,
  warning: colors.warningLighter,
  error: colors.errorLighter,
  delete: colors.errorLighter,
}

const icons: Record<VariantColors, ReactNode> = {
  success: (
    <CheckOutlinedIcon
      style={{
        zIndex: 100,
        color: colors.succesMain,
        width: '40px',
        height: '40px',
      }}
    />
  ),
  warning: (
    <QueryBuilderOutlinedIcon
      style={{
        zIndex: 100,
        color: colors.warningMain,
        width: '40px',
        height: '40px',
      }}
    />
  ),
  error: (
    <CloseOutlinedIcon
      style={{
        zIndex: 100,
        color: colors.warningMain,
        width: '40px',
        height: '40px',
      }}
    />
  ),
  delete: (
    <DeleteOutlineOutlinedIcon
      style={{
        zIndex: 100,
        color: colors.warningMain,
        width: '40px',
        height: '40px',
      }}
    />
  ),
}

export interface NotificationProps {
  content: {
    title?: string
    message?: string
    variant: VariantColors
    link?: { linkText: string; url: string }
    button1?: {
      text: string
      onClick: () => void
      variant?: 'text' | 'outlined' | 'contained'
      color?: 'error' | 'primary' | 'secondary'
      endIcon?: ReactNode
      startIcon?: ReactNode
    }
    button2?: {
      text: string
      onClick: () => void
      variant?: 'text' | 'outlined' | 'contained'
      color?: 'error' | 'primary' | 'secondary'
      endIcon?: ReactNode
      startIcon?: ReactNode
    }
    closeBtn?: boolean
    children?: ReactNode
    icon?: ReactNode
    customFirtsColor?: string
    customSecondColor?: string
  }
  id: string
}

const Notification = (props: NotificationProps) => {
  const {
    content: {
      title,
      message,
      closeBtn,
      variant,
      button1,
      button2,
      children,
      icon,
      customFirtsColor,
      customSecondColor,
    },
    // id,
  } = props

  const closeNotifications = () => {
    // toast.remove(id);
  }

  const Icon = icon ? icon : icons[variant]

  return (
    <ModalBase
      open
      onClose={() => {}}
      maxWidth="xs"
      wrapperPading="64px 32px 32px 32px"
      fullWidth
    >
      <Stack alignItems={'center'}>
        <IconContainer
          firstColor={
            customFirtsColor
              ? customFirtsColor
              : variantColorsFirstColor[variant]
          }
          secondColor={
            customSecondColor
              ? customSecondColor
              : variantColorsSecondColor[variant]
          }
          size="extra-large"
        >
          {Icon}
        </IconContainer>

        <Box
          display={'flex'}
          flexDirection={'column'}
          gap={'8px'}
          margin={'24px 0'}
          alignItems={'center'}
          width={'100%'}
        >
          <Typography variant="h2" textAlign={'center'}>
            {title}
          </Typography>
          <Typography
            variant="body1"
            style={{ color: colors.greyDark }}
            textAlign={'center'}
          >
            {message}
          </Typography>
          {children}
        </Box>
        <Box
          display={'flex'}
          gap={'8px'}
          width={'100%'}
          justifyContent={Boolean(button2) ? '' : 'center'}
        >
          {button2 && (
            <Button
              variant={button2.variant ? button2.variant : 'contained'}
              color={button2.color ? button2.color : 'secondary'}
              size="large"
              onClick={() => {
                button2.onClick()
                closeNotifications()
              }}
              sx={{ width: button2 ? '50%' : 'auto' }}
              endIcon={button2.endIcon}
              startIcon={button2.startIcon}
            >
              {button2.text}
            </Button>
          )}
          {button1 && (
            <Button
              variant={'contained'}
              color={button1.color}
              size="large"
              sx={{ width: button2 ? '50%' : 'auto' }}
              onClick={() => {
                button1.onClick()
                closeNotifications()
              }}
              endIcon={button1.endIcon}
              startIcon={button1.startIcon}
            >
              {button1.text}
            </Button>
          )}

          {closeBtn && (
            <Button
              variant="contained"
              onClick={closeNotifications}
              fullWidth
              size="large"
            >
              Cerrar
            </Button>
          )}
        </Box>
      </Stack>
    </ModalBase>
  )
}

export default Notification

export const IconContainer = styled('div')(
  ({
    firstColor,
    secondColor,
    size,
  }: {
    firstColor: string
    secondColor: string
    size?: 'normal' | 'big' | 'extra-large'
  }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: firstColor,
    border: `8px solid ${secondColor}`,
    borderRadius:
      size === 'big' ? '64px' : size === 'extra-large' ? '96px' : '28px',
    width: size === 'big' ? '64px' : size === 'extra-large' ? '96px' : '50px',
    height: size === 'big' ? '64px' : size === 'extra-large' ? '96px' : '50px',
  })
)
