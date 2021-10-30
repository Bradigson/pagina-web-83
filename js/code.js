//===============Efecto Parallax==============
document.addEventListener("mousemove", parallax);
function parallax(e){
    this.querySelectorAll(".layer").forEach(layer=>{
        const speed = layer.getAttribute("data-speed");
        const x = (window.innerWidth - e.pageX*speed)/100;
        const y = (window.innerHeight - e.pageY*speed)/100;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}


//=====================scrollTrigger==================
gsap.to('#ataud2, #house',{
    scrollTrigger:{
        scrub:0.5,
    },
    
    y:650
});
gsap.to('#house2',{
    scrollTrigger:{
        scrub:0.5,
    },
    y:1500
})
gsap.to('#ataud, #house2',{
    scrollTrigger:{
        scrub:0.5,
    },
    y:800
})
gsap.to('#house2',{
    scrollTrigger:{
        scrub:0.5,
    },
    
    y:300
})
gsap.to('#tree',{
    scrollTrigger:{
        scrub:0.7,
    },
    
    y:700
});

gsap.to('#witch',{
    scrollTrigger:{
        scrub:0.5,
    },
    x:1500,
    y:600
});


gsap.to('#bat',{
    scrollTrigger:{
        scrub:0.5,
    },
    x:-1500,
    y:-500
})
gsap.to('#bat2',{
    scrollTrigger:{
        scrub:0.5,
    },
    x:1500,
    y:-200
})


gsap.to('#moon',{
    scrollTrigger:{
        scrub:0.5,
    },
    y:1000
})

//======================srollReveal====================
window.sr = ScrollReveal();
sr.reveal('#section-two__content1',{
    delay:1500,
    origin:'left',
    distance:'60px',
    duration:1000,
    easing:'linear'
});
sr.reveal('#calabaz',{
    delay:1500,
    origin:'right',
    distance:'60px',
    duration:1000,
    easing:'linear'
});

sr.reveal('#ghost',{
    delay:1500,
    origin:'top',
    distance:'60px',
    duration:1000,
    easing:'linear'
})
sr.reveal('#sect-3_cont1-info',{
    delay:1500,
    origin:'bottom',
    distance:'60px',
    duration:1000,
    easing:'linear'
})