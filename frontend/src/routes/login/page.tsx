import ROUTES from '@/constants/allRoutes'
import { colors } from '@/constants/colors'
import loginImage from '@/public/images/loginSide.svg'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import {
  createFileRoute,
  FileRoutesByPath,
  useNavigate,
} from '@tanstack/react-router'
import { object, string } from 'yup'

import { PasswordInputControl } from '@/components/core/Inputs/Text/PasswordFieldControl'
import { TextFieldControl } from '@/components/core/Inputs/Text/TextFieldControl'
import { useNotificationsContext } from '@/components/providers/NotificationsProvider/useNotificationsContext'
import { emailSchema } from '@/utils/validations'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

export const Route = createFileRoute(
  (ROUTES.LOGIN + '/') as keyof FileRoutesByPath
)({
  component: Login,
})

const schema = object().shape({
  email: emailSchema.required('Un correo electrónico válido es requerido'),
  password: string().required('Una contraseña es requerida'),
})

function Login() {
  const navigate = useNavigate()
  const { onOpenModalFullScreenLoading } = useNotificationsContext()

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const onSubmit = async () => {
    await new Promise(resolve => setTimeout(resolve, 200))
    onOpenModalFullScreenLoading()
    navigate({ to: ROUTES.DASHBOARD })
  }

  return (
    <Grid
      container
      size={12}
      sx={{ width: '100vw', backgroundColor: 'blueviolet' }}
    >
      <Grid
        size={{ md: 5.5, xs: 12 }}
        className="flex w-full items-center justify-center bg-white"
      >
        <Box className="flex flex-col items-start justify-center h-full w-full min-w-[344px] max-w-[472px]">
          <Box display={'flex'} flexDirection={'column'} marginBottom={'32px'}>
            <Typography variant="h1" color={colors.textPrimary}>
              Iniciar sesión
            </Typography>
            <Typography variant="body2" color={colors.textSecondary}>
              Ingresa tus credenciales para continuar
            </Typography>
          </Box>

          <Stack gap={'16px'} className="w-full">
            <TextFieldControl
              label={'Correo electrónico'}
              placeholder={'Ingresa tu correo electrónico'}
              name="email"
              tabIndex={1}
              control={control}
            />
            <PasswordInputControl
              label={'Contraseña'}
              placeholder={'Ingresa tu contraseña'}
              name="password"
              tabIndex={2}
              control={control}
            />
            <Stack gap={'8px'}>
              <Button
                variant="contained"
                fullWidth
                type="submit"
                tabIndex={3}
                size="large"
                onClick={handleSubmit(onSubmit)}
              >
                Ingresar
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Grid>
      <Grid
        size={{ md: 6.5, xs: 0 }}
        sx={{ height: '100vh', backgroundImage: `url(${loginImage})` }}
      >
        <Box
          height={'100vh'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'flex-start'}
          flexDirection={'column'}
          gap={'16px'}
          zIndex={1}
        ></Box>
      </Grid>
    </Grid>
  )
}
