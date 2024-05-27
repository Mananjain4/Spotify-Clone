let audioElement=new Audio();
let masterPlay=document.getElementById("masterplay");
let progressBar=document.getElementById("progressBar");
let backward=document.getElementById("backward");
let forward=document.getElementById("forward");
let song1=document.getElementById("song1");
let song2=document.getElementById("song2");
let song3=document.getElementById("song3");
let song4=document.getElementById("song4");
let song5=document.getElementById("song5");
let song6=document.getElementById("song6");
let song7=document.getElementById("song7");
let song9=document.getElementById("song9");
let song10=document.getElementById("song10");
let song11=document.getElementById("song11");
let song12=document.getElementById("song12");
let song13=document.getElementById("song13");
let song14=document.getElementById("song14");
let song15=document.getElementById("song15");
let song16=document.getElementById("song16");
let song17=document.getElementById("song17");
let song18=document.getElementById("song18");
let song19=document.getElementById("song19");
let song20=document.getElementById("song20");
let song21=document.getElementById("song21");
let song22=document.getElementById("song22");
let song23=document.getElementById("song23");

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

song1.addEventListener("click",()=>{
    audioElement.pause();
    audioElement=new Audio("songs/song1.mp3");;
    audioElement.play();
    start();
    progress();
});

song2.addEventListener("click",()=>{
    audioElement.pause();
    audioElement=new Audio("songs/song2.mp3");
    audioElement.play();
    start();
    progress();
});

song3.addEventListener("click",()=>{
    audioElement.pause();
    audioElement=new Audio("songs/song3.mp3");
    audioElement.play();
    start();
    progress();
});

song23.addEventListener("click",()=>{
    audioElement.pause();
    audioElement=new Audio("songs/song23.mp3");
    audioElement.play("songs/song23.mp3");
    start();
    progress();
});

song4.addEventListener("click",()=>{
    audioElement.pause();
    audioElement=new Audio("songs/song4.mp3");
    audioElement.play("songs/song4.mp3");
    start();
    progress();
});

song5.addEventListener("click",()=>{
    audioElement.pause();
    audioElement=new Audio("songs/song5.mp3");
    audioElement.play("songs/song5.mp3");
    start();
    progress();
});

song6.addEventListener("click",()=>{
    audioElement.pause();
    audioElement=new Audio("songs/song6.mp3");
    audioElement.play("songs/song6.mp3");
    start();
    progress();
});

song7.addEventListener("click",()=>{
    audioElement.pause();
    audioElement=new Audio("songs/song7.mp3");
    audioElement.play("songs/song7.mp3");
    start();
    progress();
});

song9.addEventListener("click",()=>{
    audioElement.pause();
    audioElement=new Audio("songs/song9.mp3");;
    audioElement.play();
    start();
    progress();
});

song10.addEventListener("click",()=>{
    audioElement.pause();
    audioElement=new Audio("songs/song10.mp3");;
    audioElement.play();
    start();
    progress();
});

song11.addEventListener("click",()=>{
    audioElement.pause();
    audioElement=new Audio("songs/song11.mp3");;
    audioElement.play();
    start();
    progress();
});

song12.addEventListener("click",()=>{
    audioElement.pause();
    audioElement=new Audio("songs/song12.mp3");;
    audioElement.play();
    start();
    progress();
});

song13.addEventListener("click",()=>{
    audioElement.pause();
    audioElement=new Audio("songs/song13.mp3");;
    audioElement.play();
    start();
    progress();
});

song14.addEventListener("click",()=>{
    audioElement.pause();
    audioElement=new Audio("songs/song14.mp3");;
    audioElement.play();
    start();
    progress();
});

song15.addEventListener("click",()=>{
    audioElement.pause();
    audioElement=new Audio("songs/song15.mp3");;
    audioElement.play();
    start();
    progress();
});

song16.addEventListener("click",()=>{
    audioElement.pause();
    audioElement=new Audio("songs/song16.mp3");
    audioElement.play("songs/song16.mp3");
    start();
    progress();
});

song17.addEventListener("click",()=>{
    audioElement.pause();
    audioElement=new Audio("songs/song17.mp3");
    audioElement.play("songs/song17.mp3");
    start();
    progress();
});

song18.addEventListener("click",()=>{
    audioElement.pause();
    audioElement=new Audio("songs/song18.mp3");
    audioElement.play("songs/song18.mp3");
    start();
    progress();
});

song19.addEventListener("click",()=>{
    audioElement.pause();
    audioElement=new Audio("songs/song19.mp3");
    audioElement.play("songs/song19.mp3");
    start();
    progress();
});

song20.addEventListener("click",()=>{
    audioElement.pause();
    audioElement=new Audio("songs/song20.mp3");
    audioElement.play("songs/song20.mp3");
    start();
    progress();
});

song21.addEventListener("click",()=>{
    audioElement.pause();
    audioElement=new Audio("songs/song21.mp3");
    audioElement.play("songs/song21.mp3");
    start();
    progress();
});

song22.addEventListener("click",()=>{
    audioElement.pause();
    audioElement=new Audio("songs/song22.mp3");
    audioElement.play("songs/song22.mp3");
    start();
    progress();
});

