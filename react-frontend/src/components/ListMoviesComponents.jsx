import React, { Component } from 'react';
import MovieService from '../services/MovieService';

class ListMoviesComponent extends Component {
  constructor(props) {
      super(props)

      this.state = {
               movies: []    

      }
  }
 

componentDidMount(){
    MovieService.getMovies().then((res) => {
            this.setState({ movies: res.data});



    });
}








   render() {
       return (
           <div>
               <h1 className="text-left"> S3_Systems </h1><br/>
               <h2 className="text-center"> Movie Masala </h2><br/><br/>

                <h5 className="text-center"> Movies List </h5>
                <div  className="row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Movie id</th>
                                <th>Movie Name</th>
                                <th>Actors</th>
                                <th>Release_Date</th>
                                <th>Rating</th>
                                <th>Image</th>

                            </tr>
                        </thead>
                        
                         <tbody>
                             {
                                 this.state.movies.map(
                                     movie => 
                                     <tr key = {movie.id}>
                                         <td> {movie.id}</td>
                                         <td> {movie.Name}</td>
                                         <td> {movie.Actors}</td>
                                         <td> {movie.Release}</td>
                                         <td> {movie.Rating}</td>
                                         <td> <img src="{movie.Image}"/></td>
                                         

                                     </tr>
                                 )
                             }

                         </tbody>



                    </table>



                </div>


           </div>
       )
   }
}

export default ListMoviesComponent