import RecipeNutritionalFact from "./RecipeNutritionalFact";
import {PiFireSimpleBold} from 'react-icons/pi' // npm install react-icons
import {TbAvocado} from 'react-icons/tb'
import {LuBean, LuGrape, LuWheat} from 'react-icons/lu'


const RecipeHeader = ({nutritionalFacts, name}) => {

    const nutritionalFactsArray = [
        {
            id: 1,
            amount: nutritionalFacts?.calories || 0,
            category: "calories",
            Icon: PiFireSimpleBold
        },
        {
            id: 2,
            amount: nutritionalFacts?.carbohydrates || 0,
            category: "carbs",
            Icon: LuWheat
        },
        {
            id: 3,
            amount: nutritionalFacts?.fat || 0,
            category: "fat",
            Icon: TbAvocado
        },
        {
            id: 4,
            amount: nutritionalFacts?.protein || 0,
            category: "proteins",
            Icon: LuBean
        },
        {
            id: 5,
            amount: nutritionalFacts?.sugar || 0,
            category: "sugar",
            Icon: LuGrape
        }
    ];

  
  return (
    <header className="recipe-header">
        <h1>{name}</h1>
        <div className="nutritional-facts-container">
            {nutritionalFactsArray.map((fact) => (
                <RecipeNutritionalFact key={fact.id} fact={fact}/>
            ))}
        </div>
    </header>
  )
    
  
}

export default RecipeHeader