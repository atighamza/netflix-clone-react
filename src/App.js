import NavBar from './components/Pages/Navbar';
import Row from './components/Pages/Row';
import Banner from './components/Pages/Banner';
import requests from './requests';
function App() {
  return (
    <div className="App" style={{marginBottom:'50px'}}>
      <NavBar />
      <Banner />
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} largeRow isOriginalCategory />
      <Row title='Trending now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action 	&#38; Adventure' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horrors' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romantic' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />

    </div>
  );
}

export default App;
