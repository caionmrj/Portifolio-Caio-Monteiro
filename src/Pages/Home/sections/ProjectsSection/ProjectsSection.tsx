import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "Clima tempo",
            subtitle: "",
            srcImg: "/assets/Clima-tempo-tumb.png",
            description: "Site 100% funcional onde você poderá ver o clima de qualquer cidade ou estado tanto do brazil quanto do mundo, com dados atualizados em tempo real, além de mostrar a previsão dos proximos dias",
            technologies: "Technologies: JavaScript, HTML, CSS, React.JS e vite.",
            websiteURL: "https://clima-tempo-liart.vercel.app",
            codeURL: "https://github.com/Kaiudoh/Clima-tempo",
        },
        {
            title: "Pokedex",
            subtitle: "",
            srcImg: "/assets/Pokedex-tumb.png",
            description: "Site catalogo de pokemons, onde é possível pesquisar por nome ou id, além de ver detalhes de cada pokemon onde usei o conceito e api para ter acesso aos dados.",
            technologies: "Technologies: JavaScript, HTML e CSS",
            websiteURL: "https://pokedex-k4y1.vercel.app",
            codeURL: "https://github.com/Kaiudoh/Pokedex",
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
