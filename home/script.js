document.addEventListener('DOMContentLoaded',function(){
   const button = document.querySelector(".surprise");
   
   button.addEventListener('click',function(){
      if (!document.querySelector("video")){
         let vid = document.createElement("video");
         vid.src = "rickroll.mp4";
         vid.type = 'video/mp4';
         vid.controls = true;
         vid.width = 640;
         vid.autoplay = true;
         vid.style.display = 'block'
         vid.style.margin = "auto";

         document.querySelector('body').appendChild(vid);
      }
   });
});