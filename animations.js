gsap.from(".banner__title", {
    scrollTrigger: ".banner__title",
    x: 100,
    duration: 1.5,
    opacity: 0,
    ease: "bounce"
  });

gsap.from(".quote__title", {
    scrollTrigger: ".quote__title",
    x: 50,
    duration: 1.5,
    opacity: 0
  });

  gsap.from("#fraisier", {
    scrollTrigger: "#fraisier",
    y: -200,
    duration: 1,
    opacity: 0,
    delay: 0.5
  })

  gsap.from("#forêt", {
    scrollTrigger: "#forêt",
    y: 200,
    duration: 1,
    opacity: 0,
    delay: 0.5
  })