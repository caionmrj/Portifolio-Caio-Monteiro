import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "Pro bet",
            subtitle: "",
            srcImg: "/assets/Pro-Bet-tumb.png",
            description: "Projeto sobre apostas esportivas onde é possível acessar jogos de vários esportes ao vivo e marcados, além de poder fazer apostas em tempo real.",
            technologies: "Technologies: TypeScript, TailWild, Next.JS.",
            websiteURL: "https://projeto-pro-bet.vercel.app",
            codeURL: "https://github.com/Kaiudoh/Projeto-ProBet",
        },
        {
            title: "Ministério de eventos",
            subtitle: "",
            srcImg: "/assets/",
            description: "Aplicação desenvolvida para uma igreja poder manusear seus eventos da melhor forma, possui sistema de login e interface diferente dependendo do nivel de acesso (adm ou user).",
            technologies: "Technologies: React.Js, firebase, JavaScript, tailwind e vite.",
            websiteURL: "https://ministerio-de-eventos.vercel.app",
            codeURL: "https://github.com/caionmrj/ministerio-de-eventos",
        },
       {
            title: "Clima tempo",
            subtitle: "",
            srcImg: "/assets/Clima-tempo-tumb.png",
            description: "Aplicação onde você poderá ver o clima de qualquer cidade ou estado, com dados atualizados em tempo real, mostra também a previsão dos proximos dias",
            technologies: "Technologies: JavaScript, HTML, CSS, React.JS e vite.",
            websiteURL: "https://clima-tempo-liart.vercel.app",
            codeURL: "https://github.com/Kaiudoh/Clima-tempo",
        },
        {
            title: "Clone do Spotify",
            subtitle: "",
            srcImg: "/assets/Clone-spotify-tumb.png",
            description: "Um projeto funcional, clone do spotify onde é possível além de navegar livremente pelo site ainda é ouvir algumas musicas selecionadas por mim.",
            technologies: "Technologies: JavaScript HTML e CSS.",
            websiteURL: "https://spotify-clone-one-liart.vercel.app",
            codeURL: "https://github.com/Kaiudoh/spotify-clone-",
        },
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projetos</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid item md={6} key={index}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />  
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection
