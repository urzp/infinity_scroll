$(function(){
    
    
    var new_row = function(){
        $(".content").append('<div class="row"></div>') 
        $(".row:last").append('<div class="image">')
        $(".row:last").append('<div class="description">')
        $(".description:last").append('<div class="move_title">')
        $(".description:last").append('<div class="genre">')
        $(".description:last").append('<div class="meta">')
        $(".description:last").append('<div class="plot">')
        $(".description:last").append('<div class="director">')
        $(".director:last").append('<p>Director:<span></span></p>')
        $(".description:last").append('<div class="Writers">')
        $(".Writers:last").append('<p>Writers:<span></span></p>')
        $(".description:last").append('<div class="Stars">')
        $(".Stars:last").append('<p>Stars:<span></span></p>')    
    }
    
    var fill_last_row = function(movie){
        $(".image:last").append('<img src="https://images-na.ssl-images-amazon.com/images/M/MV5BNmFmZDdkODMtNzUyMy00NzhhLWFjZmEtMGMzYjNhMDA1NTBkXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"')
    }
    
    new_row();
    fill_last_row('s');
})




