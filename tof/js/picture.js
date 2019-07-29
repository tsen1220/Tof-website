var pic=[
"./tof/sass/background/1.png",
"./tof/sass/background/2.png",
"./tof/sass/background/3.png",
"./tof/sass/background/4.jpg",
"./tof/sass/background/5.png",
"./tof/sass/background/6.png",
"./tof/sass/background/7.jpg",
"./tof/sass/background/8.png",
"./tof/sass/background/9.png",
"./tof/sass/background/10.png",
"./tof/sass/background/11.png",
"./tof/sass/background/12.jpg",
"./tof/sass/background/13.jpg",
"./tof/sass/background/14.jpg",
"./tof/sass/background/15.png",
"./tof/sass/background/16.jpg",
"./tof/sass/background/17.png",
"./tof/sass/background/18.png",
]


window.onload= function(){
    var h=`<h2>美術圖</h2>`
    var img=``
    var foot=`<div id="footer">© 2019 Made By Tzu-En ,who like this game. Images are from https://www.throneoflies.com/</div>`
    for(var i=0;i<18;i++){
        img+=`<img src="${pic[i]}" alt="" width="512px" height="288px" style="display:inline-block">`
    }
    document.getElementById('textcontainer').innerHTML= h+img +foot
}