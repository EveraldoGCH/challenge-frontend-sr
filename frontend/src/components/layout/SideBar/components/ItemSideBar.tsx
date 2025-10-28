'use client'
import { colors } from '@/constants/colors'
import {
  Box,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { useLocation } from '@tanstack/react-router'
import { ListItemSideBar } from '../SideBarStyles'
import { SideBarItem } from '../type'

interface Props {
  item: SideBarItem
}

export function ItemSideBar({ item }: Props) {
  const { name, onClick, icon, path, disabled } = item
  const { pathname } = useLocation()
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const content = (
    <ListItemSideBar
      style={pathname === path ? { backgroundColor: colors.greyLight } : {}}
      disabled={disabled}
      onClick={onClick}
    >
      <Box display={'flex'} alignItems={'center'} gap={'8px'}>
        {icon}
        {!isSmallScreen && <Typography variant={'body2'}>{name}</Typography>}
      </Box>
    </ListItemSideBar>
  )

  return disabled ? (
    <Tooltip title={`Funcionalidad en desarrollo`} arrow placement="right">
      <span>{content}</span>
    </Tooltip>
  ) : (
    content
  )
}
