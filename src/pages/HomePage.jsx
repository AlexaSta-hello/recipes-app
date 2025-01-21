import Header from '../components/Header'
import Loading from '../components/Loading'
import CardList from '../components/CardList'
import useFetchRecipes from '../hooks/useFetchRecipes'

const HomePage = () => {

  const [data, loading, error] = useFetchRecipes();

  return (
    <>
      <Header />
      {loading && <Loading />}
      {data && <CardList recipes={data}/>}
      {error && <p>{error}</p>}
    </>
        
  )
}

export default HomePage