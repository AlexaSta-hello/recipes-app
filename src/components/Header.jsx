import { useState } from 'react'
import mainHeaderImage from '../assets/main-header.png'
import {motion} from 'framer-motion'
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
                    <h1 className="header-title">
                        Look for <span>vegan</span> Food
                    </h1>
                    <p className="header-description">
                        Explore a world of delicious, plant-based dishes with thousands of recipes at your 
                        fingertips. From sweet treats to savory meals, our app offers a wide variety of 
                        vegan options to suit every taste. 
                    </p>
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
                    <div className="header-input-container">
                        <input 
                            type="text" 
                            placeholder="Find a recipe..." 
                            onChange={(e) => setSearchTerm(e.target.value)}
                            value={searchTerm}/>
                        <button onClick={handleClick}>Search</button>
                    </div>
                </motion.div>
            </div>
            <div className='image-container'>
                <img src={mainHeaderImage} alt=" Veggie Soup" className='main_img'/>
            </div>
        </header>
    )
}

export default Header
