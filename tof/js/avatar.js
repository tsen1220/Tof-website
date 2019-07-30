var pic=[
    "./tof/sass/avatar/1.jpg",
    "./tof/sass/avatar/2.jpg",
    "./tof/sass/avatar/3.jpg",
    "./tof/sass/avatar/4.jpg",
    "./tof/sass/avatar/5.jpg",
    "./tof/sass/avatar/6.jpg",
    "./tof/sass/avatar/7.jpg",
    "./tof/sass/avatar/8.jpg",
    "./tof/sass/avatar/9.jpg",
    "./tof/sass/avatar/10.jpg",
    ]
    
    
    window.onload= function(){
        var h=`<h2>Avatar頭像(有些為節慶限定)</h2>`;
        var img=``;
        var foot=` <div id="footer">© 2019 Made By Tzu-En ,who like this game. Images are from https://www.throneoflies.com/</div>`
        for(var i=0;i<10;i++){
            img+=`<img src="${pic[i]}" alt="" width="300px" height="250px" style="border-radius:45%">`
        }
        document.getElementById('textcontainer').innerHTML= h+img+foot
    }


