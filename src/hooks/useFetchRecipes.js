import axios from 'axios'; // npm install axios
import { useEffect, useState } from 'react';

const options = {
  method: 'GET',
  url: 'https://tasty.p.rapidapi.com/recipes/list',
  params: {
    from: '0',
    size: '20',
  },
  headers: {
    'x-rapidapi-key': 'ce1184107cmsh030389028d9506cp15736bjsn40b3506153ac',
    'x-rapidapi-host': 'tasty.p.rapidapi.com'
  }
};

const useFetchRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      fetchRecipes();
    }, [])
  
    const fetchRecipes = async () => {
      setLoading(true)
      try {
        const response = await axios.request(options);
        setRecipes(response.data.results);
        setLoading(false)
      } catch (error) {
        console.error(error);
        setLoading(false)
      }
    };

    return [recipes, loading]
}

export default useFetchRecipes