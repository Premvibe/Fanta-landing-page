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
},'orange')

tl.to("#orange-cut",{
  top:"160%",
  left:"23%",
},'orange')

tl.to("#orange",{
  width:"50",
  top:"160%",
  right:"10%",
},'orange')