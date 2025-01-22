import axios from 'axios'; // npm install axios
import { useState } from 'react';

const options = {
  method: 'GET',
  url: 'https://tasty.p.rapidapi.com/recipes/list',
  params: {
    from: '0',
    size: '20',
    tags: 'vegan'
  },
  headers: {
    'x-rapidapi-key': 'ce1184107cmsh030389028d9506cp15736bjsn40b3506153ac',
    'x-rapidapi-host': 'tasty.p.rapidapi.com'
  }
};

const useFetchRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
  
    const fetchRecipes = async (searchTerm) => {
      setLoading(true);
      setRecipes([]);
      setError('');
      
      try {
        const reqOptions = {...options}
        if(searchTerm) {
          reqOptions.params.q = searchTerm
        }
        const response = await axios.request(reqOptions);
        console.log(response)
        setRecipes(response.data.results);
        setLoading(false)
      } catch (error) {
        console.log(error);
        setError(error.message);
        setLoading(false)
      }
    };

    return [fetchRecipes, { data: recipes, loading, error }]
}

export default useFetchRecipes