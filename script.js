gsap.from(".navbar img, .navbar .right",{
   scale:0,
   opacity:0,
   duration:1,
   delay:1,
   ease:Circ.easeInOut
})
gsap.from(".main h1",{
    x:"20vw",
    duration:1.5,
    delay:1,
    ease:Power2.easeInOut
})
gsap.from(".main h2",{
    x:"-20vw",
    duration:1.5,
    delay:1,
    ease:Power2.easeInOut

})