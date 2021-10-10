let API_KEY = "4f1e19d06337e4684fe456a5cb6c973d";


const requests = {
    fetchTopRated : `/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchPopular : `/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchUpcoming : `/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTv : `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  


};

export default requests;