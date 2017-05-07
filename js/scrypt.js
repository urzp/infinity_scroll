$(function(){
    var page = 0;
    function new_row_movies(movie){
        new_row();
        fill_last_row(movie);
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
        new_data.Poster = '<img src="' + movie.Poster + ' alt="no img" >'
        if (movie.Poster == 'N/A'){
          new_data.Poster = '<img src="img/i.jpg" alt="img none">'  
        }
        new_data.Title = '<h3>' + movie.Title + ' <span>(' + movie.Year +')</span></h3>' 
        new_data.genre = movie.Runtime + ' ' + movie.Genre.replace(/\,/gi," |" ) + " - " + movie.Released;
        new_data.Plot = movie.Plot;
        new_data.Director = movie.Director
        new_data.Writer = movie.Writer
        new_data.Actors = movie.Actors
        return new_data;
    }        
    var get_movies = function(find_text,page){
        var movies = [];
        $.ajax({
            url: "http://www.omdbapi.com/?",
            type: "GET",
            data: ({s:find_text,type:"movie",page:page}),
            dataType: "json",
            beforeSend: functionBefore,
            success: functionSuccess
        })
        
        function functionSuccess (data){
            //data = JSON.parse(data);
            data = data["Search"];
            
            data.forEach(function(item){
               movies.push(item["imdbID"]); 
                get_info(item["imdbID"]); 
            });

        }
        
        function functionBefore(){
            $('footer > img').css("display", "block")
        }
        
        
        function get_info(id){
            $.ajax({
                url: "http://www.omdbapi.com/?",
                type: "GET",
                data: ({i:id,plot:"full"}),
                dataType: "json",
                beforeSend: functionBefore,
                success: get_info_Success
            })
            
            function get_info_Success(info){
                $('footer > img').css("display", "none")
                new_row_movies(info);
            }
            
        }
        
    }      
    $( window ).scroll(function(){
        var y = $(window).scrollTop();
        var h = $(document).height() - $(window).height() - 10;       
        if (y>h){
            page+=1;
            get_movies(page);
        }
    })
    get_movies(page);
})




