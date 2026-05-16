document.addEventListener('DOMContentLoaded',function(){
    let home = document.querySelector('.home');

    home.addEventListener('mouseover',function(){
        home.classList.add("hover");
    });

    home.addEventListener('mouseout',function(){
        home.classList.remove("hover");
    });
});