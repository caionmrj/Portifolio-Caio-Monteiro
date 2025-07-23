import { Box, Container, IconButton, Typography, styled } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

// IconButton animado
const AnimatedIconButton = styled(IconButton)(({ theme }) => ({
    transition: "transform 0.25s cubic-bezier(.68,-0.55,.27,1.55), box-shadow 0.25s cubic-bezier(.68,-0.55,.27,1.55)",
    boxShadow: "0 2px 8px 0 rgba(0,0,0,0.04)",
    '&:hover': {
        backgroundColor: theme.palette.secondary.light,
        color: "#fff",
        transform: "scale(1.08) translateY(-12px)",
        boxShadow: "0 12px 32px 0 rgba(0,0,0,0.22)",
    },
    '&:active': {
        transform: "scale(0.96) translateY(0)",
        boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)",
    },
}));

const Footer: React.FC = () => {

    return (
        <>
            <Box pt={2} pb={2}>
                <Container maxWidth="sm">
                    <Box display="flex" alignItems="center" justifyContent="space-around" pb={1}>
                        <AnimatedIconButton onClick={() => window.open("https://github.com/Kaiudoh")}>
                            <GitHubIcon />
                        </AnimatedIconButton>
                        <AnimatedIconButton onClick={() => window.open("https://www.linkedin.com/in/caio-nascimento-monteiro-9b039a217")}>
                            <LinkedInIcon />
                        </AnimatedIconButton>
                        <AnimatedIconButton onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=caionmparj@gmail.com", "_blank")}> 
                            <EmailIcon />
                        </AnimatedIconButton>
                    </Box>
                    <Typography textAlign="center">
                        © 2025 Caio Monteiro - Todos os direitos reservados.
                    </Typography>
                </Container>
            </Box>
        </>
    )
}

export default Footer
