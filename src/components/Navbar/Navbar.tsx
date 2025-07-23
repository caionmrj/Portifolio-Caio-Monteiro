import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { styled } from '@mui/material';

export const StyledNavLink = styled("a")(() => ({
    textDecoration: "none",
    color: "inherit"
}));

export const StyledMobileToolbar = styled(Toolbar)(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
        display: "flex",
        justifyContent: "end"
    },
    [theme.breakpoints.up('md')]: {
        display: "none",
    },
}));

export const StyledDesktopToolbar = styled(Toolbar)(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
        display: "none",
    },
    [theme.breakpoints.up('md')]: {
        display: "flex",
        justifyContent: "space-evenly",
    },
}));

export const AnimatedMenuItem = styled(MenuItem)(({ theme }) => ({
    transition: "transform 0.22s cubic-bezier(.68,-0.55,.27,1.55), background 0.22s, color 0.22s",
    borderRadius: 8,
    '&:hover': {
        backgroundColor: theme.palette.secondary.light,
        transform: 'scale(1.08)',
    },
    '&:active': {
        transform: 'scale(0.96)',
    },
}));

export default function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSmoothScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            handleClose();
        }
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="absolute">
                <StyledMobileToolbar>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <AnimatedMenuItem onClick={() => handleSmoothScroll("about")}> <StyledNavLink>Sobre</StyledNavLink> </AnimatedMenuItem>
                        <AnimatedMenuItem onClick={() => handleSmoothScroll("skills")}> <StyledNavLink>Habilidades</StyledNavLink> </AnimatedMenuItem>
                        <AnimatedMenuItem onClick={() => handleSmoothScroll("projects")}> <StyledNavLink>Projetos</StyledNavLink> </AnimatedMenuItem>
                    </Menu>
                </StyledMobileToolbar>
                <StyledDesktopToolbar variant="regular">
                    <AnimatedMenuItem onClick={() => handleSmoothScroll("about")}> <StyledNavLink>Sobre mim</StyledNavLink> </AnimatedMenuItem>
                    <AnimatedMenuItem onClick={() => handleSmoothScroll("skills")}> <StyledNavLink>Habilidades</StyledNavLink> </AnimatedMenuItem>
                    <AnimatedMenuItem onClick={() => handleSmoothScroll("projects")}> <StyledNavLink>Projetos</StyledNavLink> </AnimatedMenuItem>
                </StyledDesktopToolbar>
            </AppBar>
        </Box >
    );
}