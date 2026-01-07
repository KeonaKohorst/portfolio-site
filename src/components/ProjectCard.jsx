import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      {/* If 'link' exists, wrap the card in an <a> tag; otherwise, just render the div */}
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          
          {/* Optional: Add a "View Project" button or link if the prop is passed */}
          {link && (
            <div className="proj-link">
              <a href={link} target="_blank" rel="noreferrer" style={{ color: "black", marginTop: "10px", display: "block" }}>
                View Project
              </a>
            </div>
          )}
        </div>
      </div>
    </Col>
  );
};