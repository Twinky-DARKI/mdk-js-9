document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".slides")
  const dots = document.querySelectorAll(".dot")
  let currentIndex = 0
  const totalSlides = dots.length

  function updateSlider(index) {
    slides.style.transform = `translateX(-${index * 100}%)`
    dots.forEach(dot => dot.classList.remove("active"))
    dots[index].classList.add("active")
  }

  document.querySelector(".next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalSlides
    updateSlider(currentIndex)
  })

  document.querySelector(".prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides
    updateSlider(currentIndex)
  })

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      currentIndex = parseInt(dot.getAttribute("data-index"))
      updateSlider(currentIndex)
    })
  })

  // Инициализация
  updateSlider(currentIndex)
})
