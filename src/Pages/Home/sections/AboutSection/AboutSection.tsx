
import { Box, Card, Container, Grid, Typography, styled } from "@mui/material";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const AboutSection: React.FC = () => {

    // Card para experiência (sem hover animado)
    const ExperienceCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
    }));

    // Card para habilidades (com hover animado)
    const SkillCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        transition: "transform 0.25s cubic-bezier(.68,-0.55,.27,1.55), box-shadow 0.25s cubic-bezier(.68,-0.55,.27,1.55), background 0.25s, color 0.25s",
        boxShadow: "0 2px 8px 0 rgba(0,0,0,0.04)",
        cursor: "",
        position: "relative",
        overflow: "hidden",
        '&:before': {
            content: '""',
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(120deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
            opacity: 0,
            transition: "opacity 0.25s cubic-bezier(.68,-0.55,.27,1.55)",
            pointerEvents: "none",
            zIndex: 1,
        },
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            color: "#fff",
            transform: "scale(1.08) translateX(12px)",
            boxShadow: "0 12px 32px 0 rgba(0,0,0,0.22)",
            zIndex: 2,
        },
        '&:hover:before': {
            opacity: 1,
        },
        '&:active': {
            transform: "scale(0.96) translateX(0)",
            boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)",
        },
    }));

    const skillsSet = [
        "Javascript", "Typescript", "React", "Next", "Git", "HTML", "CSS","TailWind", "Figma"
    ]

    return (
        <>
            <Container maxWidth="lg">
                <Box id="about" pt={5} mb={3}>
                    <Typography variant="h2" textAlign="center" >Sobre mim</Typography>
                </Box>
                <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="right">
                            <ExperienceCard variant="outlined">
                                <WorkspacePremiumIcon />
                                <Typography textAlign="center" fontWeight={600}>Experiencia</Typography>
                                <Typography textAlign="center">2+ ano</Typography>
                                <Typography textAlign="center">Desenvolvedor FrontEnd</Typography>
                            </ExperienceCard>
                        </AnimationComponent>
                    </Grid>
                </Grid>
                <Box pb={1}>
                    <Typography>
                        Desenvolvedor Front-End com experiência em React.js, Next.js, TailWind, JavaScript, TypeScript e outras tecnologias modernas. Possuo
                        vivência prática adquirida em programas de trainee e estágio, com foco no desenvolvimento web moderno,
                        criação de interfaces de usuário responsivas e eficientes, e aplicação de boas práticas de codificação. Estou
                        em busca de uma oportunidade como Desenvolvedor Front-End Júnior, onde possa aplicar meus
                        conhecimentos, contribuir com projetos e continuar evoluindo profissionalmente em um ambiente desafiador.
                    </Typography>
                </Box>
                <hr />
                <Box id="skills" pt={1} mb={3}>
                    <Typography variant="h3" textAlign="center" fontWeight={300}>Habilidades</Typography>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={3} justifyContent="center">
                        {skillsSet.map((skill, index) => (
                            <Grid item key={index} xs={5} sm={4} md={2} lg={2}>
                                <SkillCard variant="outlined">
                                    {skill}
                                </SkillCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default AboutSection
