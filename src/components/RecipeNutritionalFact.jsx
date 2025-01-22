

const RecipeNutritionalFact = ({fact}) => {

  const {Icon} = fact;

  return (
    <div className="recipe-fact-container">
        <Icon size={15}/>
        <h3>{fact.amount}</h3>
        <p>{fact.category}</p>
    </div>
  )
}

export default RecipeNutritionalFact