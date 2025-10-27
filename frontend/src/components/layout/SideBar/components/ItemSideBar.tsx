'use client'
import { Box, Stack, Typography } from '@mui/material'
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

  return (
    <ListItemSideBar
      style={pathname === path ? { backgroundColor: colors.greyLight } : {}}
      onClick={onClick}
    >
      <Box display={'flex'} alignItems={'center'} gap={'8px'}>
        {icon}
        <Stack>
          <Typography variant={'body2'}>{name}</Typography>
        </Stack>
      </Box>
    </ListItemSideBar>
  )
}
