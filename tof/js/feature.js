var tl=anime.timeline({
     easing:"easeOutExpo",
     duration:500,
})

tl.add({
     targets:"#mm",
     opacity:1,
     duration:3000,
     translateX:{
         value:"30px",
        duration:2000,}
});

tl.add({
    targets:"#ss",
    opacity:1,
    duration:1500,
    translateX:{
        value:"-30px",
       duration:500,}
});


tl.add({
    targets:"#p",
    opacity:1,
    duration:1500,
    translateX:{
        value:"20px",
       duration:500,}
});