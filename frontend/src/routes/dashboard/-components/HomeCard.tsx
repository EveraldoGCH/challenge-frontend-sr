'use client'
import { Card } from '@/components/core/Card/Card'
import { Skeleton, Typography, useTheme } from '@mui/material'
import NumberFlow, { continuous } from '@number-flow/react'
import dayjs from 'dayjs'
import { useDashboardContext } from '../-context/useDashboardContext'
import { colors } from '@/constants/colors'

interface Props {
  title: string
  value?: number | undefined
  amount?: number | undefined
  isLoading: boolean
  type?: 'value' | 'percentage'
}

const MAX_CRITICAL_PERCENTAGE = 5

export function HomeCard({
  title,
  amount,
  value,
  isLoading,
  type = 'value',
}: Props): React.JSX.Element {
  const theme = useTheme()
  const { metricsResponse } = useDashboardContext()

  if (isLoading) {
    return (
      <Skeleton
        variant="rounded"
        width={'33%'}
        height={'150px'}
        sx={{ borderRadius: '16px' }}
      />
    )
  }
  return (
    <Card
      stack
      stackGap="8px"
      width="calc(33% - 16px)"
      title={title}
      rightComponent={
        <Typography variant="caption" color={'secondary'}>
          {`${dayjs(metricsResponse?.[0]?.updatedAt).format('DD/MM')} - ${dayjs().format('DD/MM')}`}
        </Typography>
      }
    >
      <div className="flex items-center gap-1 min-w-[240px]">
        {amount && <Typography variant="h1">$</Typography>}
        {(value || amount) && (
          <NumberFlow
            value={value ?? amount ?? 0}
            plugins={[continuous]}
            style={{
              ...theme.typography.h1,
              ...(type === 'percentage' &&
              (value ?? 0) > MAX_CRITICAL_PERCENTAGE
                ? { color: colors.errorMain }
                : {}),
            }}
          />
        )}
        {type === 'percentage' && (
          <Typography
            variant="h1"
            color={
              (value ?? 0) > MAX_CRITICAL_PERCENTAGE
                ? colors.errorMain
                : 'inherit'
            }
          >
            %
          </Typography>
        )}
      </div>
    </Card>
  )
}
