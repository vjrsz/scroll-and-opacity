$(document).scroll(function(){
    el = $("#elementId")[0];

    if ( el.getBoundingClientRect().top < window.innerHeight/2){
        el.classList.add("blur");

    }else{
        el.classList.remove("blur");
    }
})