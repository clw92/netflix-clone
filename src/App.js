import './App.css';
import requests from './requests';
import Row from "./Row"
import Banner from "./Banner"


function App() {
  return (
    <div className="App">
      <Banner />
      <div className="container">
      <Row title="TOP RATED" fetchUrl= {requests.fetchTopRated} />
      <Row title="UPCOMING" fetchUrl= {requests.fetchUpcoming} />
      <Row title="POPULAR" fetchUrl= {requests.fetchPopular} />
      <Row title="TV" fetchUrl= {requests.fetchTv} />
      </div>
  
    </div>
  );
}
export default App;
