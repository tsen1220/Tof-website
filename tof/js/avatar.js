var pic=[
    "./tof/sass/avatar/1.png",
    "./tof/sass/avatar/2.png",
    ]
    
    
    window.onload= function(){
        var h=`<h2><b>Avatar頭像(金框為節慶限定)</b></h2>`;
        var img=``;
        var foot=` <div id="footer">© 2019 Made By Tzu-En ,who like this game. Images are from https://tol.fandom.com/wiki/</div>`
        for(var i=0;i<2;i++){
            img+=`<img src="${pic[i]}" alt="" width="700px" height="400px" >`
        }
        document.getElementById('textcontainer').innerHTML= h+img+foot
    }


