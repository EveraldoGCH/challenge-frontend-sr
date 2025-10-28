import { ModalBase } from '@/components/core/Modal/ModalBase/ModalBase'
import { colors } from '@/constants/colors'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined'
import { Box, Button, Stack, styled, Typography } from '@mui/material'
import { ReactNode } from 'react'

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

export interface ModalNotificationProps {
  content: {
    title?: string
    message?: string
    variant: VariantColors
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
  }
  open: boolean
  onClose: () => void
}

const Notification = (props: ModalNotificationProps) => {
  const {
    content: { title, message, variant, button1, button2 },
    open,
    onClose,
  } = props

  return (
    <ModalBase
      open={open}
      onClose={onClose}
      maxWidth="xs"
      wrapperPading="32px"
      fullWidth
    >
      <Stack alignItems={'center'}>
        <IconContainer
          firstColor={variantColorsFirstColor[variant]}
          secondColor={variantColorsSecondColor[variant]}
          size="extra-large"
        >
          {icons[variant]}
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
                onClose()
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
                onClose()
              }}
              endIcon={button1.endIcon}
              startIcon={button1.startIcon}
            >
              {button1.text}
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
