let cursor = document.querySelector(".cursor");
let container = document.querySelector(".container");
function cursoranim() {
  container.addEventListener("mousemove", (dets) => {
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
  });
}
cursoranim();
function locomotive() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".container"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy(".container", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector(".container").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
// locomotive();
gsap.from(".navbar img, .navbar .right, .main h5, .main h4", {
  scale: 0,
  opacity: 0,
  duration: 1,
  delay: 1,
  ease: Circ.easeInOut,
});
gsap.from(".main h1", {
  y: "20vw",
  duration: 1.5,
  delay: 1,
  ease: Power2.easeInOut,
});
gsap.from(".main h2", {
  y: "-40vw",
  duration: 1.5,
  delay: 1,
  ease: Power2.easeInOut,
});
document.querySelector(".main-text").addEventListener("mousemove", (dets) => {
  document.querySelector(".elem1 img").style.scale = "1";
  document.querySelector(".elem1 img").style.opacity = "1";
  document.querySelector(".elem1 img").style.top = dets.y - 100 + "px";
  document.querySelector(".elem1 img").style.left = dets.x - 100 + "px";
  cursor.style.opacity = "0";
});
document.querySelector(".main-text").addEventListener("mouseleave", () => {
  document.querySelector(".elem img").style.scale = "0";
  document.querySelector(".elem img").style.opacity = "0";
  cursor.style.opacity = "1";
});
