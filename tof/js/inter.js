var pic=[
    "./tof/sass/interface/11.png",
    "./tof/sass/interface/12.png"
    ]
    
    
    window.onload= function(){
        var h=`<h2 style="font-size:50px">介面介紹</h2>`
        var img=``
        var img2=``
        var foot=`<div id="footer">© 2019 Made By Tzu-En ,who like this game. Images are from https://www.throneoflies.com/</div>`
        img =`<img src="${pic[0]}" alt="" width="1020px" height="700px" >`
        img2=`<img src="${pic[1]}" alt="" width="1020px" height="700px" >`
        document.getElementById('textcontainer').innerHTML= h+img+img2 +foot
    }