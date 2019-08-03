var pic=[
    "./tof/sass/weapon/1.png",
    "./tof/sass/weapon/0.png",
    "./tof/sass/weapon/2.png",
    "./tof/sass/weapon/3.png",
    "./tof/sass/weapon/4.png",
    "./tof/sass/weapon/5.png",
    "./tof/sass/weapon/6.png",
    "./tof/sass/weapon/7.png",
    ]
    
    
    window.onload= function(){
        var h=`<h2 style="font-size:50px"><b>Weapon武器(金框為節慶限定)</b></h2>`;
        var img=``;
        var foot=` <div id="footer">© 2019 Made By Tzu-En ,who like this game. Images are from https://tol.fandom.com/wiki/</div>`
        for(var i=0;i<8;i++){
            img+=`<img src="${pic[i]}" width="700" height="400">`
        }
        document.getElementById('textcontainer').innerHTML= h+img+foot
    }


