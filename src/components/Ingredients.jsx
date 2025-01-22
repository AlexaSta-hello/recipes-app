import { Link, useOutletContext, useParams } from "react-router-dom";

const Ingredients = () => {
  const { id } = useParams();
  const { ingredients } = useOutletContext();

  return (
    <div className="recipe-info-container">
      <div className="recipe-info-header">
        <h3>INGREDIENTS</h3>
        <Link to={`/recipe/${id}/instructions`} className="recipe-info-link">
          <h3>INSTRUCTIONS</h3>
        </Link>
      </div>

      {ingredients && ingredients.length > 0 ? (
        ingredients.map(({ raw_text, position }) => (
          <div className="recipe-info-content-container ingredients" key={position}>
            <p className="recipe-text">{raw_text}</p>
          </div>
        ))
      ) : (
        <p>No ingredients found.</p>
      )}
    </div>
  );
}

export default Ingredients