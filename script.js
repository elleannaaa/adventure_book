document.addEventListener('DOMContentLoaded', function () {
    const openBook = document.getElementById('openBook');
    if (openBook) {
      openBook.addEventListener('click', function () {
        window.location.href = 'pages/toc.html';
      });
    }
  
    const track = document.querySelector('.carousel-track');
    const slides = track ? Array.from(track.children) : [];
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
  
    let currentIndex = 0;
  
    function updateSlidePosition() {
      const slideWidth = slides[0].getBoundingClientRect().width;
      track.style.transform = 'translateX(-' + slideWidth * currentIndex + 'px)';
    }
  
    if (track && nextButton && prevButton) {
      nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlidePosition();
      });
  
      prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlidePosition();
      });
  
      // Set initial position
      updateSlidePosition();
    }
  });