let audioElement=new Audio();
let masterPlay=document.getElementById("masterplay");
let progressBar=document.getElementById("progressBar");
let song23=document.getElementById("song23");
let song20=document.getElementById("song20");
let song21=document.getElementById("song21");
let song13=document.getElementById("song13");

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.current<=0){
        audioElement.play();
    }
    else{
        audioElement.pause();
    }
});

function start(){
    audioElement.addEventListener("timeupdate",()=>{
        progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
        progressBar.value=progress;
    });
};

function progress(){
    progressBar.addEventListener("change",()=>{
        audioElement.currentTime=progressBar.value * audioElement.duration/100;
    });
};

song13.addEventListener("click",()=>{
    audioElement.pause();
    audioElement=new Audio("songs/song13.mp3");;
    audioElement.play();
    start();
    progress();
});

song20.addEventListener("click",()=>{
    audioElement.pause();
    audioElement=new Audio("songs/song20.mp3");;
    audioElement.play();
    start();
    progress();
});

song21.addEventListener("click",()=>{
    audioElement.pause();
    audioElement=new Audio("songs/song21.mp3");;
    audioElement.play();
    start();
    progress();
});

song23.addEventListener("click",()=>{
    audioElement.pause();
    audioElement=new Audio("songs/song23.mp3");;
    audioElement.play();
    start();
    progress();
});
