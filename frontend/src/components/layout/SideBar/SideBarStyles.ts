import { styled } from '@mui/material/styles';
import { Box, Paper } from '@mui/material';
import { colors } from '@/constants/colors';
import {
    SIDE_BAR_WIDTH,
} from '@/constants/constants';

export const SideNavCont = styled(Paper)(({ theme}) => ({
    background: 'white',
    color: colors.textPrimary,
    border: `1px solid ${theme.palette.divider}`,
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100% - 16px)',
    width: '100%',
    maxWidth: SIDE_BAR_WIDTH,
    transition: `0.1s ease`,
    left: 0,
    position: 'fixed',
    top: 0,
    margin: '8px 0px 8px 8px',
    borderRadius: '12px',
    padding: '16px',
}));

export const LogoTopbarCont = styled(Box)<{ focused: boolean }>(({ focused }) => ({
    transition: '0.1s ease',
    opacity: focused ? 1 : 0,
    marginLeft: '12px',
    width: '120px',
    height: '26.67px',
    alignSelf: 'center',
}));

export const Block = styled(Box)<{ focused: boolean; gap?: string }>(({ gap = '16px' }) => ({
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    scrollbarWidth: 'none',
    gap: gap,
    '&::-webkit-scrollbar': {
        display: 'none',
    },
}));

export const ListItemNav = styled(Box)<{
    expandableItem?: boolean;
    logoutItem?: boolean;
}>(({ theme, logoutItem }) => ({
    gap: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 500,
    borderRadius: theme.spacing(1),
    cursor: 'pointer',
    fontSize: '0.875rem',
    lineHeight: '28px',
    width: '100%',
    padding: theme.spacing(1),
    '&:hover': {
        backgroundColor: colors.greyLight,
        transition: '0.2s ease',
        color: logoutItem ? colors.errorMain : 'inherit',
    },
}));

export const ChildrenContainer = styled(Box)(({ theme }) => ({
    marginLeft: `calc(${SIDE_BAR_WIDTH})`,
    padding: `12px 48px 48px 48px`,
    width: `calc(100vw - ${SIDE_BAR_WIDTH} - 16px)`,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    [theme.breakpoints.down('lg')]: {
        // padding: '32px 24px 48px 24px',
        marginLeft: SIDE_BAR_WIDTH,
    },
}));
