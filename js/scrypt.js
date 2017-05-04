$(function(){
    var movie_data = {
            "Title":"Crouching Tiger, Hidden Dragon",
            "Year":"2000",
            "Rated":"PG-13",
            "Released":"12 Jan 2001",
            "Runtime":"120 min",
            "Genre":"Action, Adventure, Fantasy",
            "Director":"Ang Lee",
            "Writer":"Du Lu Wang (book), Hui-Ling Wang (screenplay), James Schamus (screenplay), Kuo Jung Tsai (screenplay)",
            "Actors":"Yun-Fat Chow, Michelle Yeoh, Ziyi Zhang, Chen Chang",
            "Plot":"In 19th century Qing Dynasty China, a warrior gives his sword, Green Destiny, to his lover to deliver to safe keeping, but it is stolen, and the chase is on to find it. The search leads to the House of Yu where the story takes on a whole different level.",
            "Language":"Mandarin",
            "Country":"Taiwan, Hong Kong, USA, China",
            "Awards":"Won 4 Oscars. Another 96 wins & 128 nominations.",
            "Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNDdhMzMxOTctNDMyNS00NTZmLTljNWEtNTc4MDBmZTYxY2NmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
            "Ratings":[
                        {"Source":"Internet Movie Database","Value":"7.9/10"},
                        {"Source":"Rotten Tomatoes","Value":"97%"},
                        {"Source":"Metacritic","Value":"93/100"}
                    ],
            "Metascore":"93",
            "imdbRating":"7.9",
            "imdbVotes":"224,566",
            "imdbID":"tt0190332",
            "Type":"movie",
            "DVD":"05 Jun 2001",
            "BoxOffice":"N/A",
            "Production":"Sony Pictures Classics",
            "Website":"http://www.crouchingtiger.com",
            "Response":"True"
        }
    
    
    var new_row = function(){
        $(".content").append('<div class="row"></div>') 
        $(".row:last").append('<div class="image">')
        $(".row:last").append('<div class="description">')
        $(".description:last").append('<div class="move_title">')
        $(".description:last").append('<div class="genre">')
        $(".description:last").append('<div class="plot">')
        $(".description:last").append('<div class="director">')
        $(".director:last").append('<p>Director: <span></span></p>')
        $(".description:last").append('<div class="writers">')
        $(".writers:last").append('<p>Writers: <span></span></p>')
        $(".description:last").append('<div class="Stars">')
        $(".Stars:last").append('<p>Stars:<span></span></p>')    
        $(".row:last").append('<div class="clear-fix"></div>')
    }
    
    var fill_last_row = function(movie){
        movie = trasform_move_data(movie);
        $(".image:last").append(movie.Poster)
        $(".move_title:last").append(movie.Title)
        $(".genre:last").append(movie.genre)
        $(".plot:last").append(movie.Plot)
        $(".director:last > p > span").append(movie.Director)
        $(".writers:last > p > span").append(movie.Writer)
        $(".Stars:last > p > span").append(movie.Actors)
    }
    
    var trasform_move_data = function (movie){
        new_data = {};
        new_data.Poster = '<img src="' + movie.Poster + '" alt="">'
        new_data.Title = '<h3>' + movie.Title + ' <span>(' + movie.Year +')</span></h3>' 
        new_data.genre = movie.Runtime + ' ' + movie.Genre.replace(/\,/gi," |" ) + " - " + movie.Released;
        new_data.Plot = movie.Plot;
        new_data.Director = movie.Director
        new_data.Writer = movie.Writer
        new_data.Actors = movie.Actors
        return new_data;
        
        
    }
    
    new_row();
    fill_last_row(movie_data);
    
})




