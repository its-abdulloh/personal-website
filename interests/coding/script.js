document.addEventListener('DOMContentLoaded',function(){
    let title = document.querySelector('.title');
    let word = 'Coding.';
    
    for (let i=0,n=word.length;i<n;i++){
        let delay = i*300;
        setTimeout(function(){
            title.textContent+=word[i];
        },delay);
    }
})