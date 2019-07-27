var tl=anime.timeline({
    easing:"easeOutExpo",
    duration:800,

});
tl.add({
    targets:"#title",
    opacity:1,
    duration:1000,
    

    });
tl.add({
    targets:"#show",
    opacity:1,
    duration:3000,
})