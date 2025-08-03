import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Tab } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import colorSharp2 from '../img/color-sharp2.png';
import projImg5 from '../img/docker-project.png';
import projImg6 from '../img/nginx-project.png';
import projImg4 from '../img/quizza-home.png';
import ProjectCard from './ProjectCard';
const Projects = () => {

  const projects = [
    {
      title: "Quizza - Gerador de Questões",
      description:
        "Full Stack Development Project - ML | Python | React | MongoDB",
      imgUrl: projImg4,
      link: "https://github.com/Yyfii/Quizza"
    },
    {
      title: "Docker e AWS - Wordpress.",
      description:
        "Docker | Wordpress | AWS | RDS",
      imgUrl: projImg5,
      link: "https://github.com/Yyfii/Docker-AWS-Wordpress"
    },
    {
      title: "Subindo um servidor Nginx",
      description:
        "Nginx | WSL2 | Ubuntu | Script Shell",
      imgUrl: projImg6,
      link: "https://github.com/Yyfii/NginxServer"
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projetos</h2>
            <p>
              Esses são os projetos mais recentes que desenvolvi e que estão no meu repositório github.
              <br></br>O desenvolvimento de projetos pessoais é algo que me ajuda sempre a pôr em prática o conhecimento teórico que aprendo de livros ou de forma acadêmica.
            </p>
            <Tab.Container id="projects-tab" defaultActiveKey="first">
                <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id="pills-tab"> 
                <Nav.Item>
                    <Nav.Link eventKey="first">Parte 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="second">Parte 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="third">
                    Parte 3
                    </Nav.Link>
                </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((project, index) => {
                                    return (
                                        <ProjectCard key={index} {...project} />
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        ...
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        ...
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} /> 
    </section>
  );
};

export default Projects;
