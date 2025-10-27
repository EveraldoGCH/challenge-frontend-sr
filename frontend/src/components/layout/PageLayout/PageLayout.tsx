'use client'
import {
  MAX_WIDTH_FOR_DESKTOP_XL,
  MIN_WIDTH_FOR_DESKTOP_XL,
} from '@/constants/constants'
import { Box, Skeleton, Stack, Typography } from '@mui/material'
import { ReactNode, memo } from 'react'
import { colors } from '@/constants/colors'

interface PageLayoutProps {
  title: string
  subtitle?: string
  children: ReactNode
  callToAction?: ReactNode
  childrenGap?: string
  contentCallToAction?: ReactNode
}

const PageLayout = ({
  title,
  subtitle,
  children,
  callToAction,
  childrenGap,
  contentCallToAction,
}: PageLayoutProps) => {
  return (
    <Stack
      spacing={'24px'}
      sx={{ width: '100%' }}
      alignItems={'center'}
      minWidth={{ xl: MIN_WIDTH_FOR_DESKTOP_XL }}
      maxWidth={{ xl: MAX_WIDTH_FOR_DESKTOP_XL }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'column', md: 'row' }}
        spacing={3}
        sx={{
          xs: { alignItems: 'center' },
          md: { alignItems: 'flex-end' },
          width: '100%',
        }}
      >
        <Box sx={{ flex: '1 1 auto' }}>
          <Stack gap={'4px'}>
            {title !== '' ? (
              <Typography variant="h1">{title}</Typography>
            ) : (
              <Skeleton
                variant="text"
                style={{ height: '32px', width: '20vw' }}
              />
            )}
            {subtitle !== '' ? (
              <Typography color={colors.textSecondary}>{subtitle}</Typography>
            ) : (
              <div style={{ height: '32px', width: '6px' }} />
            )}
          </Stack>
        </Box>
        <Box
          sx={{
            flex: '1 1 auto',
            display: 'flex',
            justifyContent: { xs: 'flex-start', md: 'flex-end' },
            gap: '15px',
          }}
        >
          {callToAction}
        </Box>
      </Stack>

      <Stack
        width={'100%'}
        gap={childrenGap ?? '24px'}
        maxWidth={MAX_WIDTH_FOR_DESKTOP_XL}
      >
        {contentCallToAction}

        {children}
      </Stack>
    </Stack>
  )
}

export default memo(PageLayout)
