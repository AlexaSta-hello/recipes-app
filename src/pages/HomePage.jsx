import { useEffect } from 'react'
import Header from '../components/Header'
import Loading from '../components/Loading'
import CardList from '../components/CardList'
import useFetchRecipes from '../hooks/useFetchRecipes'

const HomePage = () => {

  const [fetchRecipes, { data, loading, error }] = useFetchRecipes();

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleSearch = (searchTerm) => { // Erhält searchTerm von Header
    if(searchTerm){               // Funktion steuert Suchvorgang und wird an Kind HEADER als Prop übergeben.
        fetchRecipes(searchTerm); //re-fetch Data mit searchTerm
    }
  };

  return (
    <>
      <Header handleSearch={handleSearch}/>  
      {loading && <Loading />}
      {data && <CardList recipes={data}/>}
      {error && <p>{error}</p>}
    </>
        
  )
}

export default HomePage