$(document).scroll(function(){
    var elements = document.getElementsByClassName("os__text-item")

    var main = 0;
    main = elements[0];

    for (let el of elements) {
        console.log(el.getBoundingClientRect().top, window.innerHeight/2 )

        let topEl = el.getBoundingClientRect().top
        let topMain = main.getBoundingClientRect().top

        if ( topEl < window.innerHeight/2  &&
            topEl > window.innerHeight/2 -200
        ){
            main = topEl > topMain ? el : main;
            // el.classList.add("blur");
        }else{
            el.classList.remove("blur");
        }
    };

    main.classList.add("blur");

    for(let el of elements) {
        el != main ? el.classList.remove('blur') : false;
    }
})