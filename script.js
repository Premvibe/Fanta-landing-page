// Timeline for section .two
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
  }
});

tl.to("#fanta", {
  top: "120%",
  left: "0%",
  ease: "power2.out"
}, 'orange');

tl.to("#orange-cut", {
  top: "160%",
  left: "23%",
  ease: "power2.out"
}, 'orange');

tl.to("#orange", {
  width: "15%",
  top: "160%",
  right: "10%",
  ease: "power2.out"
}, 'orange');

tl.to("#leaf", {
  top: "110%",
  left: "70%",
  rotate: 130,
  ease: "power2.out"
}, 'orange');

tl.to("#leaf2", {
  top: "110%",
  left: "0%",
  rotate: 130,
  ease: "power2.out"
}, 'orange');


// Timeline for section .three
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "0% 95%",
    end: "30% 50%", // Increased range for better visibility
    scrub: true,
    // markers: true,
  }
});

// Entry animations from left and right
tl2.from(".lemon1", {
  rotate: -90,
  left: "-100%",
  top: "110%",
  ease: "power2.out"
}, 'ca');

tl2.from("#cocacola", {
  rotate: -90,
  top: "110%",
  left: "-100%",
  ease: "power2.out"
}, 'ca');

tl2.from(".lemon2", {
  rotate: 90,
  left: "100%",
  top: "110%",
  ease: "power2.out"
}, 'ca');

tl2.from("#pepsi", {
  rotate: 90,
  top: "110%",
  left: "100%",
  ease: "power2.out"
}, 'ca');

// Animate reused Fanta elements into center view
tl2.to("#orange-cut", {
  width: "18%",
  left: "42%",
  top: "204%",
  ease: "power2.out"
}, 'ca+=0.2'); // delay slightly after entrance

tl2.to("#fanta", {
  width: "35%",
  top: "210%",
  left: "33%",
  ease: "power2.out"
}, 'ca+=0.2');
