'use client'
import { Box, TextField, TextFieldProps } from '@mui/material'
import { ReactNode } from 'react'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

interface Props {
  startAdornment?: ReactNode
  endAdornment?: ReactNode
  linkHelperText?: string
  width?: string
}

type FormTextFieldProps<T extends FieldValues> = Props &
  TextFieldProps &
  UseControllerProps<T>

export const TextFieldControl = <T extends FieldValues>(
  props: FormTextFieldProps<T>
) => {
  const { startAdornment, endAdornment, name, control, width, ...rest } = props

  const {
    field: { ref, ...fieldProps },
    fieldState: { error },
  } = useController<T>({
    name,
    control,
  })

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      gap={'2px'}
      width={width ?? '100%'}
    >
      <TextField
        helperText={error?.message || props.helperText}
        inputRef={ref}
        error={Boolean(error)}
        slotProps={{
          input: {
            startAdornment,
            endAdornment,
            ...rest.slotProps?.input,
          },
        }}
        {...rest}
        {...fieldProps}
      />
    </Box>
  )
}
