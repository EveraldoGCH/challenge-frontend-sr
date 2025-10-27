'use client'
import { colors } from '@/constants/colors'
import { formatCurrency } from '@/utils/numbers'
import { memo } from 'react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import './Chart.css'

interface DotProps {
  hover?: boolean
  active?: string
  cx?: number
  cy?: number
  payload?: { name: string }
  stroke?: string
}

function Dot({
  active,
  cx,
  cy,
  payload,
  stroke,
}: DotProps): React.JSX.Element | null {
  if (active && payload?.name === active) {
    return <circle cx={cx} cy={cy} fill={stroke} r={6} />
  }

  return null
}

function formatYAxis(num: number): string {
  if (num >= 1000000) {
    return formatCurrency(num / 1000000, { precision: 0 }) + 'M'
  } else if (num >= 1000) {
    return formatCurrency(num / 1000, { precision: 0 }) + 'K'
  }
  return num.toString()
}

export const Chart = memo(
  ({
    data,
    loadingData = false,
  }: {
    data: { name: string; value: number; shortedValue: number }[]
    loadingData?: boolean
  }): React.JSX.Element => {
    let dataForLoading = [
      {
        name: '',
        value: () => Math.random(),
        shortedValue: () => Math.random(),
      },
      {
        name: '',
        value: () => Math.random(),
        shortedValue: () => Math.random(),
      },
      {
        name: '',
        value: () => Math.random(),
        shortedValue: () => Math.random(),
      },
      {
        name: '',
        value: () => Math.random(),
        shortedValue: () => Math.random(),
      },
      {
        name: '',
        value: () => Math.random(),
        shortedValue: () => Math.random(),
      },
      {
        name: '',
        value: () => Math.random(),
        shortedValue: () => Math.random(),
      },
      {
        name: '',
        value: () => Math.random(),
        shortedValue: () => Math.random(),
      },
    ]

    return (
      <ResponsiveContainer height={'100%'} width="100%">
        <AreaChart
          data={loadingData ? dataForLoading : data}
          margin={{ top: 0, right: 5, bottom: 1, left: -10 }}
        >
          <defs>
            <linearGradient id="area-performance" x1="0" x2="0" y1="0" y2="1">
              <stop
                offset="0"
                stopColor={loadingData ? 'grey' : colors.primaryMain}
                stopOpacity={loadingData ? 0 : 0.3}
              />
              <stop
                offset="100%"
                stopColor={loadingData ? 'grey' : colors.primaryMain}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="1 10" vertical={false} />
          <XAxis
            axisLine={false}
            dataKey="name"
            tickLine={loadingData}
            type="category"
            interval={Math.floor(data.length / 5) - 1}
            padding={{ left: 12, right: 0 }}
            fontSize={'14px'}
          />
          <YAxis
            axisLine={false}
            dataKey={'shortedValue'}
            tickLine={loadingData}
            type="number"
            tickFormatter={val => (!loadingData ? formatYAxis(val) : '')}
            fontSize={'12px'}
          />
          <Area
            animationDuration={loadingData ? 100 : 800}
            dataKey="value"
            dot={<Dot />}
            fill="url(#area-performance)"
            fillOpacity={2}
            name="Balance"
            stroke={loadingData ? 'grey' : colors.primaryMain}
            strokeWidth={3}
            type="linear"
          />
          {/* {!loadingData && (
            <Tooltip
              animationDuration={100}
              content={<TooltipChart />}
              cursor={false}
            />
          )} */}
        </AreaChart>
      </ResponsiveContainer>
    )
  }
)

Chart.displayName = 'Chart'
