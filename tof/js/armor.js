var pic=[
    "./tof/sass/armor/1.png",
    "./tof/sass/armor/2.png",
    "./tof/sass/armor/3.png",
    "./tof/sass/armor/4.png",
    "./tof/sass/armor/5.png",
    "./tof/sass/armor/6.png",
        ]
    
    
    window.onload= function(){
        var h=`<h2 style="font-size:50px"><b>Armor盔甲(金框為節慶限定)</b></h2>`;
        var img=``;
        var foot=` <div id="footer">© 2019 Made By Tzu-En ,who like this game. Images are from https://tol.fandom.com/wiki/</div>`
        for(var i=0;i<6;i++){
            img+=`<img src="${pic[i]}" width="700px" height="400px" >`
        }
        document.getElementById('textcontainer').innerHTML= h+img+foot
    }


