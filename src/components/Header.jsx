import mainHeaderImage from '../assets/main-header.png'

const Header = () => {
  return (
    <header className="main_header">
        <div className="text-container">
            <h1 className="header-title">
                Look for <span>Healthy</span> Food
            </h1>
            <p className="header-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure 
                ipsum soluta voluptatum ipsam veritatis asperiores deserunt ratione vel? Hic.
            </p>
            <div className="header-input-container">
                <input type="text" placeholder="Find a recipe..." />
                <button>Search</button>
            </div>
        </div>
        <div className='image-container'>
            <img src={mainHeaderImage} alt=" Veggie Soup" className='main_img'/>
        </div>
    </header>
  )
}

export default Header
