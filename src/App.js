import './App.css';
import Row from './components/Row/Row';
import requests from './requests';

// API key: e88c15bf17a3128cbd63551c683340ca
// API read access token: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODhjMTViZjE3YTMxMjhjYmQ2MzU1MWM2ODMzNDBjYSIsInN1YiI6IjYxZDBkYjI4NjA5NzUwMDA0NWNkYWYwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wi6oNgc1xOubYzFvLLXe7l8i3wvdAw_FZ-SCh1_xYgQ

function App() {
  return (
    <div className="App">
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
