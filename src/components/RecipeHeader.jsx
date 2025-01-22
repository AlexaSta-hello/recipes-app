import RecipeNutritionalFact from "./RecipeNutritionalFact";
import {PiFireSimpleBold} from 'react-icons/pi' // npm install react-icons
import {TbAvocado} from 'react-icons/tb'
import {LuBean, LuGrape, LuWheat} from 'react-icons/lu'
import {motion} from 'framer-motion'


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
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}} /* Animation wird getriggert wenn man 0.5 vom div sieht*/
            transition={{duration: 0.6}}
            variants={{
                hidden: {opacity: 0, x:-50},
                visible: {opacity: 1, x:0}
            }}
        >
            <h1>{name}</h1>
        </motion.div>
        
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}} /* Animation wird getriggert wenn man 0.5 vom div sieht*/
            transition={{delay: 0.3, duration: 0.6}}
            variants={{
                hidden: {opacity: 0, x:-50},
                visible: {opacity: 1, x:0}
            }}
        >
            <div className="nutritional-facts-container">
                {nutritionalFactsArray.map((fact) => (
                    <RecipeNutritionalFact key={fact.id} fact={fact}/>
                ))}
            </div>
        </motion.div>
    </header>
  )
    
  
}

export default RecipeHeader