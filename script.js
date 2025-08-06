var tl = gsap.timeline({scrollTrigger:{
  trigger:".two",
  start:"0% 95%",
  end : "50% 50%",
  scrub: true,
  markers:true,
}
})

tl.to("#fanta",{
  top:"120%",
  left: "0"
})