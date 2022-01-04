import "./App.css";
import Row from "./components/Row/Row";
import Banner from "./components/Banner/Banner";
import requests from "./requests";

// API key: e88c15bf17a3128cbd63551c683340ca
// API read access token: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODhjMTViZjE3YTMxMjhjYmQ2MzU1MWM2ODMzNDBjYSIsInN1YiI6IjYxZDBkYjI4NjA5NzUwMDA0NWNkYWYwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wi6oNgc1xOubYzFvLLXe7l8i3wvdAw_FZ-SCh1_xYgQ

function App() {
  return (
    <div className="app">
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
