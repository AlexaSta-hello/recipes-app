import { useParams } from "react-router-dom" // liest URL Paramter wie :id in einer Route
import { useEffect } from "react";
import useFetchRecipe from "../hooks/useFetchRecipe";
import RecipeHeader from "../components/RecipeHeader";
import Loading from "../components/Loading";
import RecipeInfo from "../components/RecipeInfo";
import Error from "../components/Error";

const RecipePage = () => {

    const {id} = useParams (); // gibt params als string zurück, daher weiter unter parseInt
    const [fetchRecipe, { data, loading, error }] = useFetchRecipe()


    useEffect (() => {
        fetchRecipe(id)
    }, []);
   
    console.log("Data:", data);

    if (loading) return <Loading />;
    if (error) return <Error message="Error" explanation={error} />;

    // Überprüfen, ob `data` leer ist
    if (!data || data.length === 0 || data === "") {
    return <Error explanation="Recipe not found" />;
    }


    
    
    return (
        
        <div>
            {data && (
                <>
                    <RecipeHeader nutritionalFacts={data.nutrition} name={data.name}/>
                    {data.instructions && 
                    <RecipeInfo 
                    instructions={data.instructions}
                    image={data.thumbnail_url}
                    ingredients={data.sections.flatMap(section => section.components)}
                    /> }  
                </>   
            )}
            
        </div>
       
    )
}

export default RecipePage