import { useState } from 'react'
import mainHeaderImage from '../assets/main-header.png'
import { useSearchParams } from 'react-router-dom'; // Adding Query Params

const Header = ({handleSearch}) => { // props-Objekt erhält Funktion von Elterkomponente HomePage und destrukturiert sie. Hier wird sie übergeben: <Header handleSearch={handleSearch} />

    const [searchTerm, setSearchTerm] = useState(''); // lokales State für Nutzereingabe
    const [searchParams, setSearchParams] = useSearchParams()


    const handleClick = () => {
        handleSearch(searchTerm); // Übergibt Suchbegriff an Elternkomponente
        if(searchTerm){
            setSearchParams({
                search: searchTerm,
            })
        }
        setSearchTerm(""); 
    } 

    return (
        <header className="main_header">
            <div className="text-container">
                <h1 className="header-title">
                    Look for <span>vegan</span> Food
                </h1>
                <p className="header-description">
                    Explore a world of delicious, plant-based dishes with thousands of recipes at your 
                    fingertips. From sweet treats to savory meals, our app offers a wide variety of 
                    vegan options to suit every taste. 
                </p>
                <div className="header-input-container">
                    <input 
                        type="text" 
                        placeholder="Find a recipe..." 
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}/>
                    <button onClick={handleClick}>Search</button>
                </div>
            </div>
            <div className='image-container'>
                <img src={mainHeaderImage} alt=" Veggie Soup" className='main_img'/>
            </div>
        </header>
    )
}

export default Header
