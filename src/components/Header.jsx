import { useState } from 'react'
import mainHeaderImage from '../assets/main-header.png'

const Header = ({handleSearch}) => { // props-Objekt erhält Funktion von Elterkomponente HomePage und destrukturiert sie. Hier wird sie übergeben: <Header handleSearch={handleSearch} />

    const [searchTerm, setSearchTerm] = useState(''); // lokales State für Nutzereingabe

    const handleClick = () => {
        handleSearch(searchTerm); // Übergibt Suchbegriff an Elternkomponente
        setSearchTerm(""); 
    } 

    return (
        <header className="main_header">
            <div className="text-container">
                <h1 className="header-title">
                    Look for <span>vegan</span> Food
                </h1>
                <p className="header-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure 
                    ipsum soluta voluptatum ipsam veritatis asperiores deserunt ratione vel? Hic.
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
