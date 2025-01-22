import {motion} from 'framer-motion'

const AboutPage = () => {
  return (   
    
    <div className="about">
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
            <h1 className="header-title">About This App</h1>
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
            <div className="header-description">
              <p>This app is a personal project built with React, created as part of an Udemy 
                course by Laith Harb. The goal was to explore and implement React concepts 
                while developing a functional and user-friendly application. Powered by the 
                Tasty API, it offers a wide range of vegan recipes, from sweet to savory.</p>
              <p>With the app's intuitive search function, you can easily find recipes using 
                  tags and keywords that match your preferences. Each recipe has its own 
                  dedicated page with detailed instructions, a list of ingredients, and a 
                  nutritional breakdown to help you make informed decisions.</p>
              <p>Whether you're cooking for yourself or planning a vegan feast, this app is 
                here to inspire your culinary creativity!</p>
              <p>Loading GIF by <a href="https://pixabay.com/users/hsaart-8633812/?utm_source=link-attribution&utm_medium=referral&utm_campaign=animation&utm_content=5811">Harisankar Sahoo</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=animation&utm_content=5811">Pixabay</a></p>
            </div>
        </motion.div>
    </div>
           
   )
}

export default AboutPage