import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../img/color-sharp.png";
import meter1 from "../img/meter1.svg";
import meter2 from "../img/meter2.svg";
import meter3 from "../img/meter3.svg";
const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };



  return (
    <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                    <div className="skill-bx">
                        <h2>
                            Habilidades
                        </h2>
                        <p>
                            Essas são as habilidades que adquiri ao longo dos anos, através de projetos, seminários e interagindo com as pessoas.<br></br>São habilidades que continuo a desenvolver, na minha visão um dos pontos mais importantes que uma pessoa pode ter é com certeza a habilidade de sempre estar buscando aprender e desenvolver a si mesmo. Então, uso esse pensamento como meu motto para automotivação. 
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>React Js</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Desenvolvimento FullStack </h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>DevOps&CloudAWS</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Data Science</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>ML</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        <img className="background-image-left" src={colorSharp} />
    </section>
  )
}

export default Skills
