import axios from 'axios'




const MOVIE_API_BASE_URL = " http://127.0.0.1:8000 ";
class MovieService {

        getMovies(){
            return axios.get(MOVIE_API_BASE_URL);
        }
}

export default new MovieService()