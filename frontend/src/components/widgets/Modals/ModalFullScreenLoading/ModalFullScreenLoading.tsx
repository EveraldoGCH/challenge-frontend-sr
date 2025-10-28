'use client'
import { colors } from '@/constants/colors'
import logo from '@/public/images/colppyLogo.svg'
import { Box, styled } from '@mui/material'

interface Props {
  open: boolean
}

export default function ModalFullScreenLoading({ open }: Props) {
  return (
    <StyledDialog open={open}>
      <Box
        width="100%"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <img
          src={logo}
          alt="Logo"
          style={{ width: '128px', color: colors.primaryMain }}
          className="grow-animation"
        />
      </Box>
    </StyledDialog>
  )
}

const StyledDialog = styled('div')<{ open: boolean }>`
  width: 100vw;
  height: 100vh;
  z-index: 999999;
  position: absolute;
  background-color: white;
  top: 0;
  left: 0;
  opacity: ${props => (props.open ? '1' : '0')};
  display: ${props => (props.open ? 'inherit' : 'none')};
  transition: 0.5s;
  transition-behavior: allow-discrete;
  overflow: hidden;
  position: fixed;
`
