let cursor = document.querySelector(".cursor")
document.querySelector(".container").addEventListener("mousemove",(dets)=>{
    cursor.style.top = dets.y + "px"
    cursor.style.left = dets.x + "px"
})
gsap.from(".navbar img, .navbar .right, .main h5, .main h4",{
   scale:0,
   opacity:0,
   duration:1,
   delay:1,
   ease:Circ.easeInOut
})
gsap.from(".main h1",{
    y:"20vw",
    duration:1.5,
    delay:1,
    ease:Power2.easeInOut
})
gsap.from(".main h2",{
    y:"-40vw",
    duration:1.5,
    delay:1,
    ease:Power2.easeInOut
})