import { useNavigate } from "react-router-dom";

const Card = ({ recipe }) => {

  const {thumbnail_url, name, topics, cook_time_minutes, id} = recipe;

  const navigate = useNavigate();
  
  const navigateToRecipePage = () => {
    navigate(`/recipe/${id}`);
  };

  return (

    <div className="card" key={recipe.id} onClick={navigateToRecipePage}>
      <div className="card-image">
        <img src={thumbnail_url} alt={name} />
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <div className="card-info">
          <div className="tag">
            {topics.length > 0 ? <p>{topics[0].name}</p> : null}
          </div>
          {cook_time_minutes ? <div className="time-text">{cook_time_minutes} min</div> : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
