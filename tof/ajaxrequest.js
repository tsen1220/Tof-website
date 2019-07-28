function getdata(){
    var req = new XMLHttpRequest();
    req.open("get","./BlueDragon.json");
   req.onload=function(){
       console.log(this.responseText)
       var a = JSON.parse(this.responseText)
       console.log(a)
   }
    req.send();
 
}