import { Col } from "react-bootstrap"

export const ProjectCard = ({ title, description, imgUrl, githubLink, onClick }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={onClick}>
        <img src={imgUrl || "/placeholder.svg"} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}

