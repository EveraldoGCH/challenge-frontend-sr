'use client'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
} from '@mui/material'
import { useState } from 'react'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

type FormTextFieldProps<T extends FieldValues> = UseControllerProps<T> &
  TextFieldProps

export const PasswordInputControl = <T extends FieldValues>({
  name,
  control,
  ...props
}: FormTextFieldProps<T>): React.JSX.Element => {
  const [showPassword, setShowPassword] = useState(false)

  const {
    field: { ref, ...fieldProps },
    fieldState: { error },
  } = useController<T>({
    name,
    control,
  })

  const handleClickShowPassword = () => setShowPassword(prev => !prev)

  return (
    <TextField
      helperText={error?.message || props.helperText}
      {...props}
      {...fieldProps}
      type={showPassword ? 'text' : 'password'}
      inputRef={ref}
      error={Boolean(error)}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
          ...props.slotProps?.input,
        },
      }}
    />
  )
}
