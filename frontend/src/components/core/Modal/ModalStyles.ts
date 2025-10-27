import { colors } from '@/constants/colors'
import { Dialog, styled } from '@mui/material'

export const ModalRoot = styled(Dialog)(({ maxWidth }) => ({
  '& .MuiDialogContent-root': {
    backgroundColor: 'white',
    boxShadow: '0px 0px 40px rgba(12, 40, 84, 0.17)',
  },
  '& .MuiDialog-container': {
    overflowY: 'auto',
    paddingRight: '16px',
  },
  '& .MuiPaper-root': {
    color: 'inherit',
    maxWidth:
      maxWidth === 'xs'
        ? '480px'
        : maxWidth === 'sm'
          ? '600px'
          : maxWidth === 'md'
            ? '960px'
            : maxWidth === 'lg'
              ? '960px'
              : maxWidth === 'xl'
                ? '960px'
                : maxWidth || '900px',
    borderRadius: '12px',
  },
}))

export const ModalWrapper = styled('div')`
  min-width: 300px;
  padding: 24px;
  position: relative;
  box-shadow:
    0px 20px 24px -4px rgba(16, 24, 40, 0.08),
    0px 8px 8px -4px rgba(16, 24, 40, 0.03);
`

export const ModalHeader = styled('div')`
  width: 100%;
  min-height: 25px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 20px;
`

export const IconContainer = styled('div')`
  display: flex;
  width: 48px;
  min-height: 48px;
  max-height: 48px;
  padding: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid ${colors.greyLight};
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
`

export const CloseContainer = styled('div')`
  display: flex;
  width: 40px;
  max-height: 40px;
  padding: 12px;
  justify-content: center;
  align-items: center;
`
