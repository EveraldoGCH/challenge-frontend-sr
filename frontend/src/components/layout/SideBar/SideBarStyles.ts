import { colors } from '@/constants/colors'
import {
  SIDE_BAR_WIDTH_XL,
  SIDE_BAR_WIDTH_LG,
  SIDE_BAR_WIDTH_MD,
  SIDE_BAR_WIDTH_SM,
} from '@/constants/constants'
import { Box, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'

export const SideNavCont = styled(Paper)(({ theme }) => ({
  background: 'white',
  color: colors.textPrimary,
  border: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: 'calc(100% - 16px)',
  width: '100%',
  maxWidth: SIDE_BAR_WIDTH_XL,
  transition: `0.1s ease`,
  left: 0,
  position: 'fixed',
  top: 0,
  margin: '8px 0px 8px 8px',
  borderRadius: '12px',
  padding: '16px',
  [theme.breakpoints.down('lg')]: {
    maxWidth: SIDE_BAR_WIDTH_LG,
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: SIDE_BAR_WIDTH_MD,
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: SIDE_BAR_WIDTH_SM,
    padding: '6px',
    margin: '8px 0px 8px 4px',
  },
}))

export const LogoTopbarCont = styled(Box)<{ focused: boolean }>(
  ({ focused }) => ({
    transition: '0.1s ease',
    opacity: focused ? 1 : 0,
    marginLeft: '12px',
    width: '120px',
    height: '26.67px',
    alignSelf: 'center',
  })
)

export const Block = styled(Box)<{ focused: boolean; gap?: string }>(
  ({ gap = '16px' }) => ({
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    scrollbarWidth: 'none',
    gap: gap,
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  })
)

export const ListItemSideBar = styled(Box)<{
  expandableItem?: boolean
  disabled?: boolean
}>(({ theme, disabled }) => ({
  gap: theme.spacing(1),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontWeight: 500,
  borderRadius: theme.spacing(1),
  cursor: 'pointer',
  fontSize: '0.875rem',
  lineHeight: '28px',
  width: '100%',
  color: disabled ? colors.textDisabled : 'inherit',
  opacity: disabled ? 0.8 : 1,
  '.MuiTypography-root': {
    color: disabled ? colors.textDisabled : 'inherit',
  },
  padding: theme.spacing(1),
  '&:hover': {
    backgroundColor: colors.greyLight,
    transition: '0.2s ease',
  },
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    padding: '4px',
  },
}))

export const ChildrenContainer = styled(Box)(({ theme }) => ({
  marginLeft: `calc(${SIDE_BAR_WIDTH_XL} + 8px)`,
  padding: `12px 48px 48px 48px`,
  width: `calc(100% - ${SIDE_BAR_WIDTH_XL} - 48px)`,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  [theme.breakpoints.down('lg')]: {
    padding: '12px 24px 24px 24px',
    marginLeft: `calc(${SIDE_BAR_WIDTH_LG} + 8px)`,
    width: `calc(100% - ${SIDE_BAR_WIDTH_LG} - 24px)`,
  },
  [theme.breakpoints.down('md')]: {
    padding: '12px 24px 24px 24px',
    marginLeft: `calc(${SIDE_BAR_WIDTH_MD} + 8px)`,
    width: `calc(100% - ${SIDE_BAR_WIDTH_MD} - 24px)`,
  },
  [theme.breakpoints.down('sm')]: {
    padding: '12px 12px 12px 12px',
    marginLeft: `calc(${SIDE_BAR_WIDTH_SM} + 4px)`,
    width: `calc(100% - ${SIDE_BAR_WIDTH_SM} - 4px)`,
  },
}))
