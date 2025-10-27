'use client'
import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { ListItemSideBar } from '../SideBarStyles'
import { SideBarItem } from '../type'
import { useLocation } from '@tanstack/react-router'
import { colors } from '@/constants/colors'

interface Props {
  item: SideBarItem
}

export function ItemSideBar({ item }: Props) {
  const { name, onClick, icon, path } = item
  const { pathname } = useLocation()
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <ListItemSideBar
      style={pathname === path ? { backgroundColor: colors.greyLight } : {}}
      onClick={onClick}
    >
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={'8px'}
      >
        {icon}
        {!isSmallScreen && (
          <Stack>
            <Typography variant={'body2'}>{name}</Typography>
          </Stack>
        )}
      </Box>
    </ListItemSideBar>
  )
}
