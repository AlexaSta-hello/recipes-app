const Card = ({ recipe }) => {

  const {image, name, tag, numberOfMinutes} = recipe;

  return (
    <div className="card" key={recipe.id}>
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <div className="card-info">
          <div className="tag">
            <p>{tag}</p>
          </div>
          <div className="time-text">
            {numberOfMinutes} min
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
