import { Col } from 'react-bootstrap';
const ProjectCard = ({title, description, imgUrl, link}) => {
  return (
    <Col sm={6} md={4}>
        <div className='proj-imgbx'>
            <img src={imgUrl} />
            <div className='proj-txtx'>
                <h4><a href={link}  target="_blank" rel="noopener noreferrer">{title}</a></h4>
                <span>{description}</span>
            </div>
        </div>
    </Col>
  )
}

export default ProjectCard
