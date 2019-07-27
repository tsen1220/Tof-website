fetch('./BlueDragon.json')
.then(function(response){
    return response.json();
})
.then(function(data){
    let hh=data.class
    console.log(hh)
    BDDATA(hh);
    imga(hh);
})
  

const BDDATA= hh =>{
    let aaaHTML=``;
    hh.forEach(classs => {
        console.log(classs)
        if(classs.classtype =="Support"){
        aaaHTML+=`<div>${classs.night[0].n1}</div><br/>`
 }
    })
    var b = document.getElementById('load')
    b.innerHTML=aaaHTML;
    
}



const imga= hh =>{
    let bbbHTML=``;
    hh.forEach(classss => {
        console.log(classss)
        if(classss.classtype =="Support"){
        bbbHTML+=`<img src="${classss.night[0].n1img}"<br/>`
 }
    })
    var c = document.getElementById('imga')
    c.innerHTML=bbbHTML;
    
}