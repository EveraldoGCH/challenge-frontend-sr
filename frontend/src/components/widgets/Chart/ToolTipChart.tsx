import { Card } from '@/components/core/Card/Card'
import { colors } from '@/constants/colors'
import { formatCurrency } from '@/utils/numbers'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'

interface Payload {
  fill: string
  fillOpacity: number
  name: string
  stroke: string
  strokeWidth: number
  dataKey: string
  color: string
  value: number
  payload: {
    name: string
    value: number
  }
  hide: boolean
}

interface TooltipContentProps {
  active?: boolean
  payload?: Payload[]
  label?: string
}

function ToolTipItem({
  icon,
  text,
  text2,
}: {
  icon: React.ReactElement
  text: string
  text2: string
}) {
  return (
    <Box display={'flex'} justifyContent={'space-between'}>
      <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
        {icon}
        <Typography
          variant="body1"
          fontSize={'12px'}
          color={colors.textDisabled}
        >
          {text}
        </Typography>
      </div>
      <Typography variant="body2" fontSize={'12px'} color={colors.textDisabled}>
        {text2}
      </Typography>
    </Box>
  )
}

export function TooltipChart({
  active,
  payload,
}: TooltipContentProps): React.JSX.Element | null {
  if (active && payload && payload.length) {
    return (
      <Card
        padding="12px 16px"
        width="234px"
        style={{ borderRadius: '8px', backgroundColor: colors.textPrimary }}
      >
        <Stack gap={'8px'}>
          <Typography variant="subtitle2" color={'white'}>
            {payload[0].payload?.name}
          </Typography>
          <Stack
            borderTop={`1px solid ${colors.borderMain}`}
            gap={'6px'}
            paddingTop={'6px'}
          >
            <ToolTipItem
              icon={
                <AccountCircleOutlinedIcon
                  width="14px"
                  height="14px"
                  style={{ color: colors.textDisabled }}
                />
              }
              text="Usuarios activos"
              text2={`${formatCurrency(payload[0].value, { precision: 0, symbol: '' })}`}
            />
            {/* <ToolTipItem
              icon={
                <CoinsStacked03
                  color={colors.greyCool300}
                  width="14px"
                  height="14px"
                />
              }
              text="Rendimiento mensual"
              text2="$2.324K"
            /> */}
          </Stack>
        </Stack>
      </Card>
      // <div className="custom-tooltip"> asi se tienen los datos en el tooltip
      //   {/* <p className="label">{`Date: ${payload[0].payload?.name}`}</p> */}
      //   <p className="intro">{`Value: ${payload[0].value}`}</p>
      // </div>
    )
  }

  return null
}
