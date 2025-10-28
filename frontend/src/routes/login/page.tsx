import ROUTES from '@/constants/allRoutes'
import { colors } from '@/constants/colors'
import useDebounce from '@/hooks/utils/useDebounce'
import loginImage from '@/public/images/loginSide.svg'
import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material'
import { useMemo, useState } from 'react'
import { createFileRoute, FileRoutesByPath } from '@tanstack/react-router'
import { useNavigate } from '@tanstack/react-router'
import { useNotificationsContext } from '@/components/providers/NotificationsProvider/useNotificationsContext'

export const Route = createFileRoute(
  (ROUTES.LOGIN + '/') as keyof FileRoutesByPath
)({
  component: Login,
})

function Login() {
  const navigate = useNavigate()
  const { onOpenModalFullScreenLoading } = useNotificationsContext()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const debouncedEmail = useDebounce(email, 500)
  const debouncedPassword = useDebounce(password, 500)

  const isDirtyForm = useMemo(() => {
    return debouncedEmail !== '' && debouncedPassword !== ''
  }, [debouncedEmail, debouncedPassword])

  const handleSubmit = async () => {
    await new Promise(resolve => setTimeout(resolve, 500))
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
            <TextField
              label={'Correo electrónico'}
              placeholder={'Ingresa tu correo electrónico'}
              name="email"
              tabIndex={1}
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              label={'Contraseña'}
              placeholder={'Ingresa tu contraseña'}
              name="password"
              tabIndex={2}
              id="input"
              onChange={e => setPassword(e.target.value)}
            />
            <Stack gap={'8px'}>
              <Button
                variant="contained"
                fullWidth
                type="submit"
                tabIndex={3}
                size="large"
                disabled={!isDirtyForm}
                onClick={handleSubmit}
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
