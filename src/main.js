document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".stars span");
  const ratingValue = document.getElementById("rating-value");

  stars.forEach((star, index) => {
    star.addEventListener("mouseover", () => {
      highlightStars(index + 1);
    });

    star.addEventListener("mouseout", () => {
      resetStars();
    });

    star.addEventListener("click", () => {
      ratingValue.textContent = index + 1;
      setActiveStars(index + 1);
    });
  });

  function highlightStars(rating) {
    stars.forEach((star, index) => {
      if (index < rating) {
        star.classList.add("active");
      } else {
        star.classList.remove("active");
      }
    });
  }

  function resetStars() {
    const currentRating = parseInt(ratingValue.textContent, 10);
    setActiveStars(currentRating);
  }

  function setActiveStars(rating) {
    stars.forEach((star, index) => {
      if (index < rating) {
        star.classList.add("active");
      } else {
        star.classList.remove("active");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".prev-btn");
  let currentIndex = 0;

  function updateSlides() {
    slides.forEach((slide, index) => {
      slide.classList.remove("active");
      if (index === currentIndex) {
        slide.classList.add("active");
      }
    });
    const offset = -currentIndex * (slides[0].offsetWidth + 20); // 20px – відступ між слайдами
    document.querySelector(".slides").style.transform = `translateX(${offset}px)`;
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlides();
  });

  updateSlides();
});
