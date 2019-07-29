function getdata(faction,index){



fetch('./tof/'+faction+'.json')
.then(function(response){
    return response.json();
})
.then(function(data){
    let hh=data.class;
    console.log(hh);
    BDDATA(hh);
  
})
const BDDATA= hh =>{
    let aaaHTML=``;
    hh.forEach(classs => {
        console.log(classs)
        if(classs.index == index){
            aaaHTML=`<div>職業名稱:${classs.classname}</div><br/>`+
            `<div>職業類別:${classs.classtype}</div><br/>`+
            `<div>轉化後(前)職業(類別):${classs.convertclass}</div><br/>`+
            `<div>勝利條件:${classs.victory}</div><br/>`+
            `<div class='posit'>`+
            `<div class='contain'><b>被動</b></div>`+
            `<div><b><img src="${classs.passive[0].p1img}">${classs.passive[0].p1}</b></div>`+
            `<div>${classs.passive[0].p1description}</div><br/>`+
            `<div><b><img src="${classs.passive[1].p2img}">${classs.passive[1].p2}</b></div><br/>`+
            `<div>${classs.passive[1].p2description}</div><br/>`+
            `<div class='contain'><b>白天技能</b></div>`+
            `<div><img src="${classs.day[0].d1img}">${classs.day[0].d1}</div><br/>`+
            `<div>${classs.day[0].d1description}</div><br/>`+
            `<div>${classs.day[0].d1times}</div><br/>`+
            `<div><b><img src="${classs.day[1].d2img}">${classs.day[1].d2}</b></div><br/>`+
            `<div>${classs.day[1].d2description}</div><br/>`+
            `<div>${classs.day[1].d2times}</div><br/>`           +
            `<div class='contain'><b>晚上技能</b></div>` +
            `<div><b><img src="${classs.night[0].n1img}">${classs.night[0].n1}</b></div><br/>`+
            `<div>${classs.night[0].n1description}</div><br/>`+
            `<div>${classs.night[0].n1times}</div><br/>`+
            `<div><b><img src="${classs.night[1].n2img}">${classs.night[1].n2}</b></div><br/>`+
            `<div>${classs.night[1].n2description}</div><br/>`+
            `<div>${classs.night[1].n2times}</div><br/>`+
            `</div>`
     }
    })
    var a=document.getElementById('description')
    a.innerHTML=aaaHTML
    
}

}

function hide(num){
    for(var i=1;i<17;i++){
        if(i==num ){
            continue
        }
     document.getElementById('bd'+i).style.display="none";
    }
}