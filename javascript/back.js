$(document).ready(function(){
    /*   var banner = $(`#banner`);
    
        function heightBanner(){
            var altura = $(window).height();
            banner.css("height", altura);
        }
        heightBanner();
    
        $(window).resize(heightBanner); */
    
        var fixed = $(`#fixedHeader`);
        $(window).on(`scroll`, function (){
            var proyect = $(`#proyectos`).offset().top;
           
     
            if( $(window).scrollTop() >= proyect){
                fixed.css(`margin-top`, 0);
    
            }else if( $(window).scrollTop() <= proyect/2) {
               fixed.css(`margin-top`, `-68px`);
            } 
        })
    });