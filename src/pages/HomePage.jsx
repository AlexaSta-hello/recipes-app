import Header from '../components/Header'
import Loading from '../components/Loading'
import CardList from '../components/CardList'
import useFetchRecipes from '../hooks/useFetchRecipes'

const HomePage = () => {

  const [data, loading] = useFetchRecipes();

  return (
    <>
      <Header />
      {loading && <Loading />}
      {data && <CardList recipes={data}/>}
    </>
        
  )
}

export default HomePage