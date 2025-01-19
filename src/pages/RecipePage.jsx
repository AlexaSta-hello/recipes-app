import { useParams } from "react-router-dom" // liest URL Paramter wie :id in einer Route
//import { recipe } from "../components/CardList"

const RecipePage = () => {

   //const {id} = useParams (); // gibt params als string zurück, daher weiter unter parseInt

   //const recipe = recipes.find(r => r.id === parseInt(id));

    return (
        <h1>{recipe.name}</h1>
       
    )
}

export default RecipePage