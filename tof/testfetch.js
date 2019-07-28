
function getdata(){
$('#load').hide();

fetch('./BlueDragon.json')
.then(function(response){
    return response.json();
})
.then(function(data){
    let hh=data.class
    console.log(hh)
    BDDATA(hh);
  
})
  

const BDDATA= hh =>{
    let aaaHTML=``;
    hh.forEach(classs => {
        console.log(classs)
        if(classs.classname =="賢王(The Good King)"){
            aaaHTML=`<div>職業名稱:${classs.classname}</div><br/>`+
            `<div>職業類別:${classs.classtype}</div><br/>`+
            `<div>轉化後職業:${classs.convertclass}</div><br/>`+
            `<div><img src="${classs.passive[0].p1img}">${classs.passive[0].p1}</div><br/>`+
            `<div>${classs.passive[0].p1description}</div><br/>`+
            `<div><img src="${classs.passive[1].p2img}">${classs.passive[1].p2}</div><br/>`+
            `<div>${classs.passive[1].p2description}</div><br/>`+
            `<div><img src="${classs.day[0].d1img}">${classs.day[0].d1}</div><br/>`+
            `<div>${classs.day[0].d1description}</div><br/>`+
            `<div>${classs.day[0].d1times}</div><br/>`+
            `<div><img src="${classs.day[1].d2img}">${classs.day[1].d2}</div><br/>`+
            `<div>${classs.day[1].d2description}</div><br/>`+
            `<div>${classs.day[1].d2times}</div><br/>`           +
            `<div><img src="${classs.night[0].n1img}">${classs.night[0].n1}</div><br/>`+
            `<div>${classs.night[0].n1description}</div><br/>`+
            `<div>${classs.night[0].n1times}</div><br/>`+
            `<div><img src="${classs.night[1].n2img}">${classs.night[1].n2}</div><br/>`+
            `<div>${classs.night[1].n2description}</div><br/>`+
            `<div>${classs.night[1].n2times}</div><br/>`
     }
    })
    var a=document.getElementById('description')
    a.innerHTML=aaaHTML
    
}

}

