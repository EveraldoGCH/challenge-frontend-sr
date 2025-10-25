'use client'
import { Box, Stack, Typography } from '@mui/material'
import { ListItemSideBar } from '../SideBarStyles'
import { SideBarItem } from '../type'

interface Props {
  item: SideBarItem;
}

export function ItemSideBar({ item }: Props) {
  const { name, onClick, icon } = item

  return (
    <ListItemSideBar
      // style={pathname === path ? { backgroundColor: colors.grey50 } : {}}
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
