var pic=[
    "./tof/sass/emote/5.png",
    "./tof/sass/emote/6.png",
    "./tof/sass/emote/7.png",
    "./tof/sass/emote/8.png",
    ]
    
    
    window.onload= function(){
        var h=`<h2 style="font-size:50px"><b>Emote表情(金框為節慶限定)</b></h2>`;
        var img=``;
        var foot=` <div id="footer">© 2019 Made By Tzu-En ,who like this game. Images are from https://tol.fandom.com/wiki/</div>`
        for(var i=0;i<4;i++){
            img+=`<img src="${pic[i]}"  width="700px" height="400px">`
        }
        document.getElementById('textcontainer').innerHTML= h+img+foot
    }


