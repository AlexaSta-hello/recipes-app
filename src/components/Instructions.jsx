import { Link, useParams, useOutletContext } from "react-router-dom";

const Instructions = () => {
  const { id } = useParams();
  const { instructions } = useOutletContext();

  return (
    <div className="recipe-info-container">
      <div className="recipe-info-header">
        <h3>INSTRUCTIONS</h3>
        <Link to={`/recipe/${id}/ingredients`} className="recipe-info-link">
          <h3>INGREDIENTS</h3>
        </Link>
      </div> 
      
      {instructions.map(({ display_text, position }) => (
        <div className="recipe-info-content-container" key={position}>
          <p className="recipe-step">{position}</p>
          <p className="recipe-text">{display_text}</p>
        </div>
      ))} 
    </div>
  );
}

export default Instructions