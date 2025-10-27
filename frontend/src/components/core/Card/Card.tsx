'use client'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

interface BaseCardProps {
  height?: string
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
  onClick?: () => void
  padding?: string
  border?: string
  borderRadius?: string
  background?: string
  width?: string
  title?: string
  subtitle?: string
  rightComponent?: React.ReactNode
}

interface StackCardProps extends BaseCardProps {
  stack: true
  stackGap?: string
}

interface NonStackCardProps extends BaseCardProps {
  stack?: false
  stackGap?: string
}

type CardProps = StackCardProps | NonStackCardProps

export function Card({
  height = '',
  children,
  style,
  onClick,
  className,
  padding,
  border,
  width,
  stack = false,
  stackGap,
  background,
  title,
  subtitle,
  rightComponent,
}: CardProps): React.JSX.Element {
  const baseStyles: React.CSSProperties = {
    height: height,
    padding: padding ? padding : '24px',
    borderRadius: '12px',
    width: width ? width : '100%',
    display: stack ? 'flex' : undefined,
    cursor: onClick ? 'pointer' : 'inherit',
    flexDirection: stack ? 'column' : undefined,
    background: background ? background : '#fff',
    border: border ? border : '1px solid #e5e7eb',
    minHeight: '25px',
    overflow: 'hidden',
  }

  if (
    title !== undefined ||
    subtitle !== undefined ||
    rightComponent !== undefined
  ) {
    return (
      <div
        style={{
          ...baseStyles,
          ...style,
        }}
        className={className}
        onClick={() => (onClick ? onClick() : {})}
      >
        {(title !== undefined || subtitle !== undefined) && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '12px',
            }}
          >
            <Box
              display={'flex'}
              flexDirection={'column'}
              gap={'8px'}
              justifyContent={'center'}
            >
              <Typography variant="h3">{title}</Typography>
              {subtitle && (
                <Typography variant="subtitle1" className="text-text-terciary">
                  {subtitle}
                </Typography>
              )}
            </Box>
            {rightComponent}
          </div>
        )}
        <Stack gap={stackGap} height={height}>
          {children}
        </Stack>
      </div>
    )
  } else {
    return (
      <div
        style={{
          ...baseStyles,
          ...style,
          gap: stackGap ? stackGap : stack ? '12px' : undefined,
        }}
        className={className}
        onClick={() => (onClick ? onClick() : {})}
      >
        {children}
      </div>
    )
  }
}
