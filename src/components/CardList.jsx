import Card from "./Card"
import pokeBowlImage from "../assets/poke-bowl.jpg";
import cashewCakeImage from "../assets/cashew-cake.jpg"
import califlowerDream from "../assets/califlower-dream.jpg";
import chiaBowl from "../assets/chia-bowl.jpg";

export const recipes = [ 
    {
    id: 1,
    name: "Poke Bowls",
    image: pokeBowlImage,
    tag: "Romantic Dinner",
    numberOfMinutes: 50
    },
    {
    id: 2,
    name: "Cashew Cake",
    image: cashewCakeImage,
    tag: "Romantic Dinner",
    numberOfMinutes: 120
    },
    {
    id: 3,
    name: "Califlower Dream",
    image: califlowerDream,
    tag: "Easy Meal",
    numberOfMinutes: 40
    },
    {
    id: 4,
    name: "Chia Bowl",
    image: chiaBowl,
    tag: "Breakfast",
    numberOfMinutes: 10
    }
  
];


const CardList = () => {
  return (
    <section className="cards">
      
        {recipes.map((recipe) => (
            <Card key={recipe.id} recipe={recipe}/>
        ))}
        
    </section>
  )
}

export default CardList