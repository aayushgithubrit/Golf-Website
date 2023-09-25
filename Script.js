// const scroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });

var crcs = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crcs.style.left = dets.x+30+"px"
    crcs.style.top = dets.y+"px"
    blur.style.left = dets.x - 150 + "px"                            
    blur.style.top = dets.y - 150 + "px"

}) 
var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crcs.style.scale = 3
        crcs.style.border = "1px solid #fff";
        crcs.style.backgroundColor = "transparent";
    });
    elem.addEventListener("mouseleave",function(){
        crcs.style.scale = 1
        crcs.style.border = "0px solid #95C11E"
        crcs.style.backgroundColor = "#95C11E"
    });
});

gsap.to("#nav",{
   backgroundColor:"#000",
   duration : 0.5,
   height:"60px",
   scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    start:"top -10%",
    end:"top -11%",
    scrub:1
   }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})
gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    // stagger:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})
gsap.from(".card",{
    scale:0.8,
    duratio:1,
    stagger:0.1,
    scrollTrigger:{
     trigger:".card",
     scroller: "body",
    //  markers:true,
     start:"top 80%",
     end: "top 75%",
     scrub:1
    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub:4,
    }

})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub:4,
    }

})
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger: "#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 72%",
        scrub:3,


    }
})
gsap.from("#footer img",{
    x:-100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#footer img",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:2,
        stagger:1,
    }
})

gsap.from("#footer #icon",{
    x:-100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#footer #icon",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:2,
        stagger:1,
    }
})

gsap.from(" #f2",{
    x:-100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:" #f2",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:2,
        stagger:1,
    
    }
})
gsap.from(" #f3",{
    x:-100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:" #f3",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:2,
        stagger:1,
    
    }
})

gsap.from(" #f4",{
    x:-100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:" #f4",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:2,
        stagger:1,
    
    }
})