import CatsList from './CatsList';
import './index';
import useFetch from "./useFech";

function App() {
  const { data: cats, isPending, error } = useFetch('https://api.thecatapi.com/v1/images/search?limit=10&page=10&order=Desc')
  console.log(cats)
  return (
    <div className="app">
      <div className='home'>
        <h1 className='title'>ALL CATS</h1>
        <br></br>
      {error && <div>{error}</div>}
      {isPending && <div>loading...</div>}
      {cats && <CatsList cats={cats} />}
    </div>
    </div>
  );
}

export default App;
