import { Outlet } from "react-router-dom" // Für Nested Route

const RecipeInfo = ({instructions, image, name, ingredients}) => {
  return (
    <div className="recipe-info">
        
        <Outlet context={{instructions, ingredients}}/>
        <img src={image} alt={name} className="recipe-img" />

    </div>
  )
}

export default RecipeInfo 